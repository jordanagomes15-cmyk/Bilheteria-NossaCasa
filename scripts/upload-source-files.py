import argparse
import os
import shutil
from pathlib import Path

ROOT = Path(os.environ.get("NOSSA_CASA_DATA_DIR", Path.home() / "Documents/Nossa Casa")).expanduser()
DEFAULT_TARGET = Path(os.environ.get("NOSSA_CASA_SOURCE_TARGET", "data/incoming")).expanduser()
EXTENSIONS = {".xlsx", ".pdf"}


def sync_folder(source, target):
    target.mkdir(parents=True, exist_ok=True)
    copied = 0
    for path in sorted(source.glob("*")):
        if path.name.startswith("~$") or path.suffix.lower() not in EXTENSIONS:
            continue
        shutil.copy2(path, target / path.name)
        copied += 1
    return copied


def main():
    parser = argparse.ArgumentParser(
        description=(
            "Sincroniza anexos locais para data/incoming ou para um checkout privado. "
            "Os arquivos podem conter PII; prefira um repositorio/bucket privado."
        )
    )
    parser.add_argument("--target", default=str(DEFAULT_TARGET), help="Destino local ou checkout privado.")
    args = parser.parse_args()

    target = Path(args.target).expanduser()
    gandaya = sync_folder(ROOT / "Gandaya", target / "Gandaya")
    pne = sync_folder(ROOT / "PNE", target / "PNE")
    print(f"Sincronizados {gandaya} arquivos Gandaya e {pne} arquivos PNE em {target}.")
    print("Se este destino for um repositorio privado, faca commit/push para disparar o GitHub Actions.")


if __name__ == "__main__":
    main()
