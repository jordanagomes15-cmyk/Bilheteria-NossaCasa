import argparse
import hashlib
import json
import os
import subprocess
import sys
import time
from datetime import datetime
from pathlib import Path

ROOT = Path(os.environ.get("NOSSA_CASA_DATA_DIR", Path.home() / "Documents/Nossa Casa")).expanduser()
GANDAYA_DIR = ROOT / "Gandaya"
PNE_DIR = ROOT / "PNE"
EXTENSIONS = {".xlsx", ".pdf"}
GENERATED = Path("generated-data.js")


def log(message):
    print(f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] {message}", flush=True)


def run(command, *, check=True):
    log("$ " + " ".join(command))
    return subprocess.run(command, check=check)


def source_files():
    files = []
    for folder in (GANDAYA_DIR, PNE_DIR):
        for path in sorted(folder.glob("*")):
            if path.name.startswith("~$") or path.suffix.lower() not in EXTENSIONS:
                continue
            try:
                stat = path.stat()
            except FileNotFoundError:
                continue
            files.append({"path": str(path), "size": stat.st_size, "modified": stat.st_mtime_ns})
    return files


def source_signature():
    raw = json.dumps(source_files(), sort_keys=True, separators=(",", ":")).encode("utf-8")
    return hashlib.sha256(raw).hexdigest()[:16]


def generated_changed():
    return subprocess.run(["git", "diff", "--quiet", "--", str(GENERATED)]).returncode != 0


def rebuild():
    run(["python3", "scripts/generate-data.py"])
    run(["npm", "run", "build"])


def commit_generated():
    if not generated_changed():
        log("Nenhuma mudanca em generated-data.js para commitar.")
        return False
    run(["git", "add", str(GENERATED)])
    run(["git", "commit", "-m", f"Atualiza dados dos anexos {datetime.now().strftime('%Y-%m-%d %H:%M')}"])
    return True


def sync_once(*, commit=True):
    rebuild()
    if commit:
        commit_generated()


def watch(*, interval, stable_seconds, commit):
    log("Monitorando anexos locais:")
    log(f"- {GANDAYA_DIR}")
    log(f"- {PNE_DIR}")
    last_seen = source_signature()
    sync_once(commit=commit)
    stable_since = time.time()

    while True:
        current = source_signature()
        now = time.time()
        if current != last_seen:
            last_seen = current
            stable_since = now
            log("Mudanca detectada. Aguardando estabilizar...")
        elif now - stable_since >= stable_seconds:
            try:
                sync_once(commit=commit)
            except Exception as exc:
                print(f"Falha ao atualizar dados: {exc}", file=sys.stderr, flush=True)
            stable_since = time.time()
        time.sleep(interval)


def main():
    parser = argparse.ArgumentParser(description="Regenera dados locais e opcionalmente cria commit. Deploy fica a cargo do GitHub/Vercel.")
    parser.add_argument("--once", action="store_true")
    parser.add_argument("--no-commit", action="store_true")
    parser.add_argument("--interval", type=float, default=2.0)
    parser.add_argument("--stable-seconds", type=float, default=5.0)
    args = parser.parse_args()
    try:
        if args.once:
            sync_once(commit=not args.no_commit)
        else:
            watch(interval=args.interval, stable_seconds=args.stable_seconds, commit=not args.no_commit)
    except KeyboardInterrupt:
        log("Monitoramento encerrado.")


if __name__ == "__main__":
    main()
