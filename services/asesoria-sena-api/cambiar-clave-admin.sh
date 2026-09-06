#!/usr/bin/env bash
set -euo pipefail

CONTAINER="asesoria-sena-api"
IMAGE="asesoria-sena-api:2"
NETWORK="wayra_system_web_v186_default"
DATA_DIR="/opt/asesoria-sena/data"
UPLOAD_DIR_HOST="/opt/asesoria-sena/uploads"

if ! command -v docker >/dev/null 2>&1; then
  echo "Error: Docker no está disponible."
  exit 1
fi

printf 'Nueva clave administrativa: '
IFS= read -r -s NEW_KEY
printf '\nRepita la nueva clave: '
IFS= read -r -s CONFIRM_KEY
printf '\n'

if [ -z "$NEW_KEY" ]; then
  echo "Error: la clave no puede quedar vacía."
  exit 1
fi
if [ "$NEW_KEY" != "$CONFIRM_KEY" ]; then
  echo "Error: las claves no coinciden. No se hizo ningún cambio."
  exit 1
fi
if [ "${#NEW_KEY}" -lt 10 ]; then
  echo "Error: use una clave de al menos 10 caracteres."
  exit 1
fi

mkdir -p "$DATA_DIR" "$UPLOAD_DIR_HOST"

docker rm -f "$CONTAINER" >/dev/null 2>&1 || true

docker run -d \
  --name "$CONTAINER" \
  --restart unless-stopped \
  --network "$NETWORK" \
  -e ADMIN_KEY="$NEW_KEY" \
  -e DB_PATH=/data/asesoria.sqlite3 \
  -e UPLOAD_DIR=/uploads \
  -v "$DATA_DIR:/data" \
  -v "$UPLOAD_DIR_HOST:/uploads" \
  "$IMAGE" >/dev/null

unset NEW_KEY CONFIRM_KEY
sleep 2
if docker exec "$CONTAINER" python -c "import urllib.request; print(urllib.request.urlopen('http://127.0.0.1:8000/health', timeout=5).read().decode())" >/dev/null; then
  echo "Clave administrativa actualizada y servicio verificado correctamente."
else
  echo "La clave se cambió, pero la comprobación automática del servicio falló."
  exit 1
fi
