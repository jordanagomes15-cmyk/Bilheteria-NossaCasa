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


def parse_xlsx(path):
    name = event_name_from_xlsx(path)
    ingressos = read_sheet(path, "Ingressos")
    resumo = read_sheet(path, "Resumo de ingressos")
    compras = read_sheet(path, "Compras")

    price_by_batch = {}
    for _, row in resumo.iterrows():
        key = normalize_batch(get_cell(row, "Descrição"))
        price_by_batch[key] = as_number(get_cell(row, "Preço médio")) or as_number(get_cell(row, "Preço"))

    batches = {}
    promoters = {}
    sold = complimentary = validated = 0
    revenue = 0.0

    for _, row in ingressos.iterrows():
        description = get_cell(row, "Descrição")
        batch_key = normalize_batch(description)
        complimentary_ticket = "cortesia" in normalize(description)
        validated_ticket = normalize(get_cell(row, "Validado")).startswith("sim")
        price = 0 if complimentary_ticket else price_by_batch.get(batch_key, 0)
        batch = batches.setdefault(
            batch_key,
            {
                "label": display(batch_key),
                "sold": 0,
                "complimentary": 0,
                "validated": 0,
                "soldValidated": 0,
                "complimentaryValidated": 0,
                "revenue": 0,
            },
        )
        promoter = promoter_from(description, get_cell(row, "Link"), complimentary_ticket)

        if complimentary_ticket:
            complimentary += 1
            batch["complimentary"] += 1
            add_promoter(promoters, promoter, complimentary=1)
        else:
            sold += 1
            revenue += price
            batch["sold"] += 1
            batch["revenue"] += price
            add_promoter(promoters, promoter, sold=1, revenue=price)

        if validated_ticket:
            validated += 1
            batch["validated"] += 1
            if complimentary_ticket:
                batch["complimentaryValidated"] += 1
                add_promoter(promoters, promoter, validated=1, complimentary_validated=1)
            else:
                batch["soldValidated"] += 1
                add_promoter(promoters, promoter, validated=1, sold_validated=1)

    for _, row in compras.iterrows():
        promoter = normalize(str(get_cell(row, "Link")).replace("-", ""))
        if not promoter:
            continue
        quantity = as_number(get_cell(row, "Quantidade"))
        total = as_number(get_cell(row, "Total"))
        current = promoters.setdefault(promoter, promoter_empty())
        current["sold"] = max(current["sold"], quantity)
        current["revenue"] = max(current["revenue"], total)

    return {
        "id": slug(name),
        "name": name,
        "source": path.name,
        "sold": sold,
        "complimentary": complimentary,
        "validated": validated,
        "revenue": round(revenue, 2),
        "batches": sorted(batches.values(), key=lambda x: (-x["revenue"], -x["sold"], -x["validated"])),
        "promoters": promoters,
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
    items = []
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
    events = [parse_xlsx(path) for path in sorted(GANDAYA_DIR.glob("*.xlsx"))]
    pnes = [parse_pne_pdf(path) for path in sorted(PNE_DIR.glob("*.pdf"))]
    data_version, source_files = source_signature()
    for pne in pnes:
        event = best_event_match(events, pne)
        if event:
            event["pne"] = pne

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
