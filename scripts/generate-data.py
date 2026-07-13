import json
import hashlib
import os
import re
import unicodedata
from datetime import datetime
from pathlib import Path

import pandas as pd
from pypdf import PdfReader

ROOT = Path("/Users/jordanagomes/Documents/Nossa Casa")
GANDAYA_DIR = ROOT / "Gandaya"
PNE_DIR = ROOT / "PNE"
OUT = Path("generated-data.js")
WATCH_EXTENSIONS = {".xlsx", ".pdf"}
DATA_SCHEMA_VERSION = "batch-excel-label-v2"


def date_from_text(value):
    text = str(value or "")
    match = re.search(r"\b(\d{2})[-_/](\d{2})[-_/](\d{4})\b", text)
    if not match:
        return ""
    day, month, year = match.groups()
    try:
        return datetime(int(year), int(month), int(day)).date().isoformat()
    except ValueError:
        return ""


def datetime_from_text(value):
    text = str(value or "")
    date_match = re.search(r"\b(\d{2})[-_/](\d{2})[-_/](\d{4})\b", text)
    if not date_match:
        return ""
    day, month, year = date_match.groups()
    hour = minute = 0
    time_match = re.search(r"\b\d{2}[-_/]\d{2}[-_/]\d{4}\s+(\d{1,2})h(\d{2})\b", text, re.I)
    if time_match:
        hour, minute = (int(part) for part in time_match.groups())
    try:
        return datetime(int(year), int(month), int(day), hour, minute).isoformat(timespec="minutes")
    except ValueError:
        return ""


def normalize(value):
    value = str(value or "").strip().lower()
    value = unicodedata.normalize("NFD", value).encode("ascii", "ignore").decode("ascii")
    value = re.sub(r"[^a-z0-9]+", " ", value)
    return re.sub(r"\s+", " ", value).strip()


def slug(value):
    return normalize(value).replace(" ", "-") or "evento"


def display(value):
    value = str(value or "").replace("-", " ").strip()
    return re.sub(r"\s+", " ", value).title() or "Sem nome"


def excel_label(value):
    value = str(value or "").strip()
    return value if value else "Sem lote"


def clean_email(value):
    return str(value or "").strip().lower()


def clean_phone(value):
    text = str(value or "").strip()
    if text.endswith(".0"):
        text = text[:-2]
    return re.sub(r"\D+", "", text)


def anonymous_person_key(user_id, email, name):
    base = normalize(user_id) or normalize(email) or normalize(name)
    if not base:
        return ""
    return hashlib.sha256(base.encode("utf-8")).hexdigest()[:14]


def event_name_from_xlsx(path):
    name = path.stem
    name = re.sub(r"\s+-\s+25-06-2026.*$", "", name, flags=re.I)
    return re.sub(r"\s+", " ", name).strip()


def event_name_from_pdf(path):
    name = path.stem
    name = re.sub(r"\s+dia\s+\d{2}[_/]\d{2}[_/]\d{4}.*$", "", name, flags=re.I)
    return re.sub(r"\s+", " ", name).strip()


def normalize_batch(value):
    value = normalize(value)
    value = re.sub(r"\b\d{1,2}\s*h\s*\d{0,2}\b", " ", value)
    value = re.sub(r"\b\d{1,2}\s+\d{2}\b", " ", value)
    value = re.sub(
        r"\b(1o|1|2o|2|3o|3|4o|4|lote|entrada|ate|valido|validas|valida|sujeito|lotacao|locacao)\b",
        " ",
        value,
    )
    return re.sub(r"\s+", " ", value).strip() or "sem lote"


def as_number(value):
    if value is None or value == "":
        return 0.0
    try:
        return float(value)
    except Exception:
        value = str(value).replace(".", "").replace(",", ".")
        try:
            return float(value)
        except Exception:
            return 0.0


def read_sheet(path, sheet):
    try:
        return pd.read_excel(path, sheet_name=sheet).fillna("")
    except Exception:
        return pd.DataFrame()


def get_cell(row, name):
    return row[name] if name in row else ""


def clean_id(value):
    text = str(value or "").strip()
    if text.lower() == "nan":
        return ""
    return text


def cancellation_contexts(cancelamentos):
    purchase_ids = set()
    quotas = {}
    for _, row in cancelamentos.iterrows():
        ticket_id = clean_id(get_cell(row, "Identificador do ingresso"))
        if ticket_id:
            purchase_ids.add(ticket_id)
        person_key = anonymous_person_key(get_cell(row, "Identificador do usuário"), get_cell(row, "E-mail"), get_cell(row, "Nome"))
        batch_key = normalize(get_cell(row, "Descrição")) or "sem lote"
        quantity = int(as_number(get_cell(row, "Quantidade")) or 1)
        if person_key and batch_key:
            quotas[(person_key, batch_key)] = quotas.get((person_key, batch_key), 0) + max(quantity, 1)
    return purchase_ids, quotas


def consume_cancelled_quota(quotas, person_key, batch_key):
    key = (person_key, batch_key)
    remaining = quotas.get(key, 0)
    if remaining <= 0:
        return False
    quotas[key] = remaining - 1
    return True


def build_purchase_units(compras):
    units = {}
    for _, row in compras.iterrows():
        quantity = int(as_number(get_cell(row, "Quantidade")) or 0)
        total = as_number(get_cell(row, "Total"))
        if quantity <= 0 or total <= 0:
            continue
        description = get_cell(row, "Descrição")
        person_key = anonymous_person_key(get_cell(row, "Identificador do usuário"), get_cell(row, "E-mail"), get_cell(row, "Nome"))
        batch_key = normalize(description) or "sem lote"
        key = (person_key, batch_key)
        unit_value = total / quantity
        promoter = promoter_from(description, get_cell(row, "Link"), False)
        units.setdefault(key, [])
        for _ in range(quantity):
            units[key].append({"promoter": promoter, "revenue": unit_value})
    return units


def consume_purchase_unit(units, person_key, batch_key):
    key = (person_key, batch_key)
    rows = units.get(key) or []
    if not rows:
        return None
    return rows.pop(0)


def promoter_from(description, link, complimentary):
    link = normalize(str(link).replace("-", ""))
    if link:
        return link
    if complimentary and "-" in str(description):
        return normalize(str(description).split("-")[-1])
    return ""


def promoter_empty():
    return {
        "sold": 0,
        "complimentary": 0,
        "validated": 0,
        "soldValidated": 0,
        "complimentaryValidated": 0,
        "revenue": 0,
    }


def add_promoter(promoters, name, sold=0, complimentary=0, validated=0, sold_validated=0, complimentary_validated=0, revenue=0):
    key = normalize(name)
    if not key:
        return
    row = promoters.setdefault(key, promoter_empty())
    row["sold"] += sold
    row["complimentary"] += complimentary
    row["validated"] += validated
    row["soldValidated"] += sold_validated
    row["complimentaryValidated"] += complimentary_validated
    row["revenue"] += revenue


def append_unique(values, value):
    if value and value != "Sem Nome" and value not in values:
        values.append(value)


def build_transfer_map(envios):
    transfers = {}
    for _, row in envios.iterrows():
        if normalize(get_cell(row, "Tipo de envio")) != "cortesia":
            continue
        name = get_cell(row, "Nome")
        key = anonymous_person_key(get_cell(row, "Identificador do usuário"), get_cell(row, "E-mail"), name)
        if not key:
            continue
        current = transfers.setdefault(key, {"recipients": [], "senders": [], "quantity": 0})
        append_unique(current["recipients"], display(name))
        append_unique(current["senders"], display(get_cell(row, "Enviado por")))
        current["quantity"] += int(as_number(get_cell(row, "Quantidade")))
    return transfers


def build_contact_map(*tables):
    contacts = {}
    for table in tables:
        for _, row in table.iterrows():
            key = anonymous_person_key(get_cell(row, "Identificador do usuário"), get_cell(row, "E-mail"), get_cell(row, "Nome"))
            if not key:
                continue
            current = contacts.setdefault(key, {"phone": ""})
            phone = clean_phone(get_cell(row, "Celular"))
            if phone and not current["phone"]:
                current["phone"] = phone
    return contacts


def add_attendee(
    attendees,
    row,
    event_id,
    event_name,
    transfer=None,
    sold=0,
    complimentary=0,
    validated=0,
    sold_validated=0,
    complimentary_validated=0,
    revenue=0,
    courtesy_context="",
    courtesy_label="",
):
    name = get_cell(row, "Nome")
    key = anonymous_person_key(get_cell(row, "Identificador do usuário"), get_cell(row, "E-mail"), name)
    if not key:
        return
    current = attendees.setdefault(
        key,
        {
            "key": key,
            "name": display(name),
            "sold": 0,
            "complimentary": 0,
            "validated": 0,
            "soldValidated": 0,
            "complimentaryValidated": 0,
            "revenue": 0,
            "eventId": event_id,
            "eventName": event_name,
            "transferRecipients": [],
            "transferSenders": [],
            "transferQuantity": 0,
            "courtesyContexts": [],
            "courtesyLabels": [],
        },
    )
    current["sold"] += sold
    current["complimentary"] += complimentary
    current["validated"] += validated
    current["soldValidated"] += sold_validated
    current["complimentaryValidated"] += complimentary_validated
    current["revenue"] += revenue
    if courtesy_context:
        append_unique(current["courtesyContexts"], courtesy_context)
    if courtesy_label:
        append_unique(current["courtesyLabels"], courtesy_label)
    if transfer and (complimentary or complimentary_validated):
        for recipient in transfer.get("recipients", []):
            append_unique(current["transferRecipients"], recipient)
        for sender in transfer.get("senders", []):
            append_unique(current["transferSenders"], sender)
        current["transferQuantity"] = max(current["transferQuantity"], int(transfer.get("quantity") or 0))


def parse_xlsx(path):
    name = event_name_from_xlsx(path)
    event_id = slug(name)
    ingressos = read_sheet(path, "Ingressos")
    resumo = read_sheet(path, "Resumo de ingressos")
    compras = read_sheet(path, "Compras")
    usuarios = read_sheet(path, "Usuários")
    envios = read_sheet(path, "Envios")
    cancelamentos = read_sheet(path, "Cancelamentos")
    contact_by_key = build_contact_map(usuarios, envios)
    cancelled_purchase_ids, cancelled_quotas = cancellation_contexts(cancelamentos)

    price_by_batch = {}
    for _, row in resumo.iterrows():
        description = get_cell(row, "Descrição")
        price = as_number(get_cell(row, "Preço médio")) or as_number(get_cell(row, "Preço"))
        exact_key = normalize(description) or "sem lote"
        family_key = normalize_batch(description)
        price_by_batch[exact_key] = price
        price_by_batch.setdefault(family_key, price)

    batches = {}
    promoters = {}
    attendees = {}
    audience = []
    sold = complimentary = validated = 0
    revenue = 0.0
    purchase_units = build_purchase_units(compras)

    for _, row in compras.iterrows():
        description = get_cell(row, "Descrição")
        batch_label = excel_label(description)
        batch_key = normalize(description) or "sem lote"
        quantity = int(as_number(get_cell(row, "Quantidade")) or 0)
        total = as_number(get_cell(row, "Total"))
        promoter = promoter_from(description, get_cell(row, "Link"), False)
        if quantity <= 0 and total <= 0:
            continue
        batch = batches.setdefault(
            batch_key,
            {
                "label": batch_label,
                "rawLabel": batch_label,
                "sold": 0,
                "complimentary": 0,
                "validated": 0,
                "soldValidated": 0,
                "complimentaryValidated": 0,
                "revenue": 0,
            },
        )
        sold += quantity
        revenue += total
        batch["sold"] += quantity
        batch["revenue"] += total
        add_promoter(promoters, promoter, sold=quantity, revenue=total)
        if quantity or total:
            add_attendee(attendees, row, event_id, name, sold=quantity, revenue=total)

    for _, row in cancelamentos.iterrows():
        cancel_value = as_number(get_cell(row, "Valor"))
        if cancel_value <= 0:
            continue
        description = get_cell(row, "Descrição")
        batch_label = excel_label(description)
        batch_key = normalize(description) or "sem lote"
        person_key = anonymous_person_key(get_cell(row, "Identificador do usuário"), get_cell(row, "E-mail"), get_cell(row, "Nome"))
        cancel_quantity = int(as_number(get_cell(row, "Quantidade")) or 1)
        cancel_quantity = max(cancel_quantity, 1)
        matched_units = [consume_purchase_unit(purchase_units, person_key, batch_key) for _ in range(cancel_quantity)]
        matched_units = [unit for unit in matched_units if unit]
        promoter = matched_units[0]["promoter"] if matched_units else ""
        batch = batches.setdefault(
            batch_key,
            {
                "label": batch_label,
                "rawLabel": batch_label,
                "sold": 0,
                "complimentary": 0,
                "validated": 0,
                "soldValidated": 0,
                "complimentaryValidated": 0,
                "revenue": 0,
            },
        )
        sold -= cancel_quantity
        batch["sold"] -= cancel_quantity
        add_promoter(promoters, promoter, sold=-cancel_quantity)
        add_attendee(attendees, row, event_id, name, sold=-cancel_quantity)

    for _, row in ingressos.iterrows():
        description = get_cell(row, "Descrição")
        batch_label = excel_label(description)
        batch_key = normalize(description) or "sem lote"
        family_key = normalize_batch(description)
        complimentary_ticket = "cortesia" in normalize(description)
        validated_ticket = normalize(get_cell(row, "Validado")).startswith("sim")
        participant_key = anonymous_person_key(get_cell(row, "Identificador do usuário"), get_cell(row, "E-mail"), get_cell(row, "Nome"))
        if consume_cancelled_quota(cancelled_quotas, participant_key, batch_key):
            continue
        price = 0 if complimentary_ticket else price_by_batch.get(batch_key, price_by_batch.get(family_key, 0))
        batch = batches.setdefault(
            batch_key,
            {
                "label": batch_label,
                "rawLabel": batch_label,
                "sold": 0,
                "complimentary": 0,
                "validated": 0,
                "soldValidated": 0,
                "complimentaryValidated": 0,
                "revenue": 0,
            },
        )
        promoter = promoter_from(description, get_cell(row, "Link"), complimentary_ticket)
        audience.append(
            {
                "name": display(get_cell(row, "Nome")),
                "email": clean_email(get_cell(row, "E-mail")),
                "phone": contact_by_key.get(participant_key, {}).get("phone", ""),
                "participantKey": participant_key,
                "ticketId": str(get_cell(row, "Identificador do ingresso") or "").strip(),
                "batchName": batch_label,
                "rawBatchName": batch_label,
                "batchKey": batch_key,
                "type": "courtesy" if complimentary_ticket else "purchase",
                "validated": bool(validated_ticket),
                "date": str(get_cell(row, "Data de compra") or ""),
                "linkOrCommissioner": promoter,
            }
        )
        if complimentary_ticket:
            complimentary += 1
            batch["complimentary"] += 1
            add_promoter(promoters, promoter, complimentary=1)
        else:
            pass

        if validated_ticket:
            validated += 1
            batch["validated"] += 1
            if complimentary_ticket:
                batch["complimentaryValidated"] += 1
                add_promoter(promoters, promoter, validated=1, complimentary_validated=1)
            else:
                batch["soldValidated"] += 1
                add_promoter(promoters, promoter, validated=1, sold_validated=1)
                add_attendee(attendees, row, event_id, name, validated=1, sold_validated=1)

    return {
        "id": event_id,
        "name": name,
        "source": path.name,
        "eventDate": date_from_text(path.name),
        "eventDateTime": datetime_from_text(path.name),
        "sold": sold,
        "complimentary": complimentary,
        "validated": validated,
        "revenue": round(revenue, 2),
        "batches": sorted(batches.values(), key=lambda x: (-x["revenue"], -x["sold"], -x["validated"])),
        "promoters": promoters,
        "attendees": sorted(attendees.values(), key=lambda x: (-x["revenue"], -x["sold"], -x["complimentaryValidated"], x["name"])),
        "audience": audience,
        "pne": None,
    }


def parse_pne_pdf(path):
    reader = PdfReader(str(path))
    text = "\n".join((page.extract_text() or "") for page in reader.pages)
    total_match = re.search(r"Total Inseridos:\s*([0-9.]+).*?Total Convertidos:\s*([0-9.]+)", text, re.S)
    inserted = int(total_match.group(1).replace(".", "")) if total_match else 0
    converted = int(total_match.group(2).replace(".", "")) if total_match else 0
    rows = []
    for line in text.splitlines():
        match = re.match(r"^(.+?)\s+(\d+)\s+(\d+)$", line.strip())
        if not match:
            continue
        name, ins, conv = match.groups()
        if normalize(name) in {"pne", "nossa casa", "total geral", "total"}:
            continue
        rows.append({"name": display(name), "inserted": int(ins), "converted": int(conv)})
    return {
        "source": path.name,
        "eventName": event_name_from_pdf(path),
        "eventDate": date_from_text(path.name),
        "eventDateTime": datetime_from_text(path.name),
        "inserted": inserted,
        "converted": converted,
        "people": rows,
    }


def best_event_match(events, pne):
    key = normalize(pne["eventName"])
    for event in events:
        event_key = normalize(event["name"])
        if key and (key in event_key or event_key in key):
            return event
    special = {
        "som na praca edicao especial": "som na praca",
        "sambae": "sambae",
        "red room": "red room",
        "nossa junina": "nossa junina",
    }
    for source, target in special.items():
        if source in key:
            for event in events:
                if target in normalize(event["name"]):
                    return event
    return None


def source_signature():
    items = [{"path": "__schema__", "size": 0, "modified": DATA_SCHEMA_VERSION}]
    for folder in (GANDAYA_DIR, PNE_DIR):
        for path in sorted(folder.glob("*")):
            if path.name.startswith("~$") or path.suffix.lower() not in WATCH_EXTENSIONS:
                continue
            stat = path.stat()
            items.append(
                {
                    "path": str(path.relative_to(ROOT)),
                    "size": stat.st_size,
                    "modified": stat.st_mtime_ns,
                }
            )
    raw = json.dumps(items, sort_keys=True, separators=(",", ":")).encode("utf-8")
    return hashlib.sha256(raw).hexdigest()[:16], items


def main():
    events = [parse_xlsx(path) for path in sorted(GANDAYA_DIR.glob("*.xlsx")) if not path.name.startswith("~$")]
    pnes = [parse_pne_pdf(path) for path in sorted(PNE_DIR.glob("*.pdf"))]
    data_version, source_files = source_signature()
    for pne in pnes:
        event = best_event_match(events, pne)
        if event:
            event["pne"] = pne
            if pne.get("eventDate"):
                event["eventDate"] = pne["eventDate"]
            if pne.get("eventDateTime"):
                event["eventDateTime"] = pne["eventDateTime"]
    events = sorted(events, key=lambda event: (event.get("eventDateTime") or event.get("eventDate") or "9999-12-31", normalize(event.get("name"))))

    payload = {
        "generatedAt": datetime.now().isoformat(timespec="seconds"),
        "dataVersion": data_version,
        "sourceFolders": {
            "gandaya": str(GANDAYA_DIR),
            "pne": str(PNE_DIR),
        },
        "sourceFiles": source_files,
        "events": events,
        "pneReports": pnes,
    }
    OUT.write_text(
        "window.NOSSA_CASA_DATA = "
        + json.dumps(payload, ensure_ascii=False, separators=(",", ":"))
        + ";\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
