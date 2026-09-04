# 🤖 AGENTS.md — irakaslewebirrealista (irrealista.com)

> **Última actualización:** 2026-09-04
> **Sitio en producción:** https://irrealista.com · https://www.irrealista.com

## Qué es

Código fuente del sitio **irrealista.com** ("Mikel Laborategi | Portal Docente CI Estella").
Desde el 2026-09-04 este repo es el origen de producción de irrealista.com, en sustitución del repo legado `mikelapestegia/irrealista` (archivado; su CD fue deshabilitado ese día — no reactivar).

## Stack

- **Vite + React** (JS), estructura en la raíz (NO hay carpeta `web/`)
- Build: `npm run build` → salida en `dist/`
- Lint: `npm run lint` (oxlint, config en `.oxlintrc.json`)
- Node **20** (ver workflows)

## Despliegue (CI/CD)

| Workflow | Trigger | Qué hace |
|---|---|---|
| `.github/workflows/ci.yml` | Push a `main`/`master` y PRs | Lint + build de verificación |
| `.github/workflows/deploy.yml` | Push a `main` que toque `src/**`, `public/**`, `index.html`, `package*.json`, `vite.config.js` o el propio workflow · manual (`workflow_dispatch`) | Build → deploy a **Cloudflare Pages** (proyecto `irrealista`) → health check de https://irrealista.com |

- **Sin gate de aprobación**: todo push a `main` de los paths anteriores despliega directo.
- El proyecto Pages `irrealista` tiene los dominios `irrealista.com` y `www.irrealista.com` (CNAMEs a `irrealista.pages.dev`, proxied). No hay que tocar DNS.

### Secretos necesarios (repo → Settings → Secrets → Actions)

- `CLOUDFLARE_API_TOKEN` (permisos Pages:Edit + Zone:Read)
- `CLOUDFLARE_ACCOUNT_ID`

Valores en la VPS: `~/.secrets/irrealista-cicd.env`.

## Dispatch manual (desde la VPS)

```bash
source ~/.secrets/irrealista-cicd.env   # o token de la GitHub App hermes-webops
curl -X POST -H "Authorization: Bearer $GITHUB_TOKEN" \
  "https://api.github.com/repos/mikelapestegia/irakaslewebirrealista/actions/workflows/deploy.yml/dispatches" \
  -d '{"ref":"main"}'
```

## Reglas para agentes

1. Cambios en rama `agent/<tarea>` → PR → CI verde → aprobación humana → merge (ver skill `github-ops` de los agentes Hermes).
2. Nunca commitear secretos.
3. Tras un deploy, verificar: run en verde + `curl -I https://irrealista.com` → 200.
4. Clone local de referencia en la VPS: `~/proyectos/irakaslewebirrealista`.

## Historial

| Fecha | Cambio |
|---|---|
| 2026-09-04 | Migrado de GitHub Pages a Cloudflare Pages (`deploy.yml` reescrito); irrealista.com pasa a servirse desde este repo; CD del repo legado `irrealista` deshabilitado |
