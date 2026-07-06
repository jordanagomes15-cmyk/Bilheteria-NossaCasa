import argparse
import hashlib
import json
import os
import re
import subprocess
import sys
import time
from datetime import datetime
from pathlib import Path

ROOT = Path("/Users/jordanagomes/Documents/Nossa Casa")
GANDAYA_DIR = ROOT / "Gandaya"
PNE_DIR = ROOT / "PNE"
EXTENSIONS = {".xlsx", ".pdf"}
GENERATED = Path("generated-data.js")
PYTHON_BIN = os.environ.get(
    "NOSSA_CASA_PYTHON",
    "/Users/jordanagomes/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3",
)
SSH_KEY = os.environ.get("NOSSA_CASA_GIT_SSH_KEY", "~/.ssh/id_ed25519_nossa_casa_gitlab")


def log(message):
    print(f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] {message}", flush=True)


def run(command, *, env=None):
    log("$ " + " ".join(command))
    subprocess.run(command, check=True, env=env)


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


def generated_version():
    if not GENERATED.exists():
        return ""
    match = re.search(r"window\.NOSSA_CASA_DATA\s*=\s*([\s\S]*);\s*$", GENERATED.read_text(encoding="utf-8"))
    if not match:
        return ""
    try:
        return json.loads(match.group(1)).get("dataVersion", "")
    except json.JSONDecodeError:
        return ""


def git_has_data_changes():
    result = subprocess.run(["git", "diff", "--quiet", "--", str(GENERATED)])
    return result.returncode != 0


def generate_and_build():
    run([PYTHON_BIN, "scripts/generate-data.py"])
    run(["npm", "run", "build"])


def commit_and_push(*, push=True):
    if not git_has_data_changes():
        log("Nenhuma mudanca em generated-data.js para publicar.")
        return False

    run(["git", "add", str(GENERATED)])
    message = f"Atualiza dados dos anexos {datetime.now().strftime('%Y-%m-%d %H:%M')}"
    run(["git", "commit", "-m", message])

    if push:
        env = os.environ.copy()
        env["GIT_SSH_COMMAND"] = f"ssh -i {SSH_KEY} -o IdentitiesOnly=yes"
        run(["git", "push"], env=env)
        log("Publicacao enviada para o GitLab. O Render deve atualizar automaticamente.")
    else:
        log("Commit criado, mas push desativado.")
    return True


def sync_once(*, force=False, push=True):
    current_signature = source_signature()
    current_generated = generated_version()
    if not force and current_signature == current_generated:
        log("Dados ja estao atualizados para a versao atual das pastas.")
        return False

    log("Mudanca detectada nas pastas. Atualizando dashboard...")
    generate_and_build()
    return commit_and_push(push=push)


def watch(*, interval, stable_seconds, push):
    log("Monitorando pastas:")
    log(f"- {GANDAYA_DIR}")
    log(f"- {PNE_DIR}")
    log("Quando houver mudanca, vou atualizar, commitar e publicar.")

    last_seen = source_signature()
    stable_since = time.time()
    sync_once(push=push)

    while True:
        current = source_signature()
        now = time.time()
        if current != last_seen:
            last_seen = current
            stable_since = now
            log("Arquivo novo/alterado detectado. Aguardando estabilizar...")
        elif current != generated_version() and now - stable_since >= stable_seconds:
            try:
                sync_once(push=push)
            except Exception as exc:
                print(f"Falha ao publicar: {exc}", file=sys.stderr, flush=True)
        time.sleep(interval)


def main():
    parser = argparse.ArgumentParser(description="Atualiza e publica o dashboard quando anexos mudarem.")
    parser.add_argument("--once", action="store_true", help="Executa uma unica atualizacao e sai.")
    parser.add_argument("--force", action="store_true", help="Regenera mesmo quando a assinatura parece atualizada.")
    parser.add_argument("--no-push", action="store_true", help="Cria commit sem enviar para o GitLab.")
    parser.add_argument("--interval", type=float, default=2.0, help="Intervalo de verificacao em segundos.")
    parser.add_argument("--stable-seconds", type=float, default=5.0, help="Tempo sem mudanca antes de processar.")
    args = parser.parse_args()

    try:
        if args.once:
            sync_once(force=args.force, push=not args.no_push)
        else:
            watch(interval=args.interval, stable_seconds=args.stable_seconds, push=not args.no_push)
    except KeyboardInterrupt:
        log("Monitoramento encerrado.")


if __name__ == "__main__":
    main()
