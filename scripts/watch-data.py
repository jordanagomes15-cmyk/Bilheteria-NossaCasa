import os
import subprocess
import sys
import time
from pathlib import Path

ROOT = Path("/Users/jordanagomes/Documents/Nossa Casa")
GANDAYA_DIR = ROOT / "Gandaya"
PNE_DIR = ROOT / "PNE"
EXTENSIONS = {".xlsx", ".pdf"}
PYTHON_BIN = os.environ.get(
    "NOSSA_CASA_PYTHON",
    "/Users/jordanagomes/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3",
)


def snapshot():
    files = []
    for folder in (GANDAYA_DIR, PNE_DIR):
        for path in sorted(folder.glob("*")):
            if path.name.startswith("~$") or path.suffix.lower() not in EXTENSIONS:
                continue
            try:
                stat = path.stat()
            except FileNotFoundError:
                continue
            files.append((str(path), stat.st_size, stat.st_mtime_ns))
    return tuple(files)


def rebuild():
    print("Atualizando dados das pastas Gandaya e PNE...", flush=True)
    subprocess.run([PYTHON_BIN, "scripts/generate-data.py"], check=True)
    subprocess.run(["npm", "run", "build"], check=True)
    print("Dados atualizados.", flush=True)


def main():
    last_seen = None
    last_built = None
    stable_since = 0.0
    rebuild()
    last_built = snapshot()
    last_seen = last_built
    stable_since = time.time()

    while True:
        current = snapshot()
        now = time.time()
        if current != last_seen:
            last_seen = current
            stable_since = now
        elif current != last_built and now - stable_since >= 2.0:
            try:
                rebuild()
                last_built = current
            except Exception as exc:
                print(f"Falha ao atualizar: {exc}", file=sys.stderr, flush=True)
        time.sleep(2)


if __name__ == "__main__":
    main()
