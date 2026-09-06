# API de gestión de solicitudes SENA

Backend privado para el módulo público `redesign-b/asesoria-sena.html`.

## Alcance

- Recibe solicitudes de preparación y acompañamiento académico.
- No recibe ni almacena contraseñas de plataformas oficiales.
- Registra pago declarado como pendiente hasta verificación administrativa.
- Permite consultar solicitudes, confirmar pagos y cambiar estados desde el panel privado.
- Genera Excel por fecha con los compromisos confirmados y Excel general.
- Admite comprobantes JPG, PNG, WEBP o PDF de hasta 5 MB.

## Producción

- Contenedor: `asesoria-sena-api`
- Directorio operativo: `/opt/asesoria-sena`
- Base SQLite persistente: `/opt/asesoria-sena/data/asesoria.sqlite3`
- Comprobantes: `/opt/asesoria-sena/uploads`
- Ruta pública de API: `https://wayrasystem.online/asesoria-api/`
- La clave administrativa se mantiene solo en el servidor y nunca debe incorporarse al repositorio.

El proxy Caddy enruta únicamente `/asesoria-api/*` hacia este servicio; el resto de `wayrasystem.online` continúa en Wayra System.
