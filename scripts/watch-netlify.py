import argparse
import hashlib
import json
import os
import subprocess
import sys
import time
from datetime import datetime
from pathlib import Path

ROOT = Path("/Users/jordanagomes/Documents/Nossa Casa")
GANDAYA_DIR = ROOT / "Gandaya"
PNE_DIR = ROOT / "PNE"
EXTENSIONS = {".xlsx", ".pdf"}
SITE_STATE = Path(".netlify/state.json")
PYTHON_BIN = os.environ.get(
    "NOSSA_CASA_PYTHON",
    "/Users/jordanagomes/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3",
)


def log(message):
    print(f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] {message}", flush=True)


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
            files.append(
                {
                    "path": str(path.relative_to(ROOT)),
                    "size": stat.st_size,
                    "modified": stat.st_mtime_ns,
                }
            )
    return files


def source_signature():
    raw = json.dumps(source_files(), sort_keys=True, separators=(",", ":")).encode("utf-8")
    return hashlib.sha256(raw).hexdigest()[:16]


def site_id():
    if os.environ.get("NETLIFY_SITE_ID"):
        return os.environ["NETLIFY_SITE_ID"]
    if SITE_STATE.exists():
        return json.loads(SITE_STATE.read_text(encoding="utf-8")).get("siteId", "")
    return ""


def run(command):
    log("$ " + " ".join(command))
    subprocess.run(command, check=True)


def generate_build_deploy():
    current_site = site_id()
    if not current_site:
        raise RuntimeError("Netlify nao esta vinculado. Rode netlify link ou netlify sites:create antes.")

    run([PYTHON_BIN, "scripts/generate-data.py"])
    run(["npm", "run", "build"])
    run(
        [
            "npx",
            "--yes",
            "netlify-cli",
            "deploy",
            "--prod",
            "--dir",
            "dist",
            "--site",
            current_site,
            "--message",
            f"Atualizacao automatica {datetime.now().strftime('%Y-%m-%d %H:%M')}",
        ]
    )
    log("Netlify atualizado.")


def watch(interval, stable_seconds):
    log("Monitorando anexos para publicar no Netlify:")
    log(f"- {GANDAYA_DIR}")
    log(f"- {PNE_DIR}")
    last_seen = source_signature()
    last_published = ""
    stable_since = time.time()

    while True:
        current = source_signature()
        now = time.time()
        if current != last_seen:
            last_seen = current
            stable_since = now
            log("Mudanca detectada. Aguardando arquivo estabilizar...")
        elif current != last_published and now - stable_since >= stable_seconds:
            try:
                generate_build_deploy()
                last_published = current
            except Exception as exc:
                print(f"Falha ao publicar no Netlify: {exc}", file=sys.stderr, flush=True)
        time.sleep(interval)


def main():
    parser = argparse.ArgumentParser(description="Atualiza e publica no Netlify quando anexos mudarem.")
    parser.add_argument("--once", action="store_true", help="Atualiza e publica uma vez.")
    parser.add_argument("--interval", type=float, default=2.0)
    parser.add_argument("--stable-seconds", type=float, default=5.0)
    args = parser.parse_args()

    try:
        if args.once:
            generate_build_deploy()
        else:
            watch(args.interval, args.stable_seconds)
    except KeyboardInterrupt:
        log("Monitoramento encerrado.")


if __name__ == "__main__":
    main()
