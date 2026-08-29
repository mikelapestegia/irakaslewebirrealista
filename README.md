# Mikel Laborategi — Portal Docente (CI Politécnico Estella - Lizarra LHI)

![Versión](https://img.shields.io/badge/Versi%C3%B3n-1.0_Beta_2026/2027-f5c518?style=for-the-badge)
![RGPD Compliance](https://img.shields.io/badge/RGPD-Conformant_AEPD-success?style=for-the-badge)
![Euskara Batua](https://img.shields.io/badge/Hizkuntza-Euskara_Batua_(Elhuyar)-blue?style=for-the-badge)
![Accesibilidad](https://img.shields.io/badge/WCAG-2.1_AA_Conformant-success?style=for-the-badge)
![Diseño](https://img.shields.io/badge/Estilo-Rockstar_GTA_V-red?style=for-the-badge)

Plataforma web pedagógica e institucional desarrollada para el **Departamento de Informática** del **CI Politécnico Estella (Lizarra LHI)** para el curso académico **2026/2027**.

---

## 5. 🔍 Calidad del Código y Compatibilidad

Aseguran que la web funcione correctamente en cualquier dispositivo y entorno:

- **Pruebas Cross-Browser**: Validación del diseño y funcionalidad en diferentes navegadores (Chrome, Safari, Firefox, Edge) garantizando renderizado fluido en CSS Grid y Flexbox.
- **Pruebas Responsivas**: Comprobación de la visualización fluida en múltiples resoluciones de pantalla (móviles 320px+, tablets 768px+ y ordenadores 1200px+).
- **Validación HTML/CSS**: Revisión con herramientas de la W3C para evitar errores sintácticos graves, manteniendo semántica HTML5 estricta (`<main>`, `<nav>`, `<section>`, `<article>`).

---

## 6. ⚡ Funcionalidad y Pruebas de Carga

Garantizan que los flujos de negocio y pedagógicos funcionen bajo presión:

- **Pruebas de Estrés (Load Testing)**: Simulación de picos de tráfico de usuarios simultáneos (entregas parciales y días de examen) con herramientas como **k6** / **Artillery** para comprobar la estabilidad del servidor.
- **Formularios y Pruebas E2E**: Pruebas de extremo a extremo (E2E) con **Playwright** / **Vitest** en entornos de sandbox para asegurar que los correos y reservas de tutorías se envían y la calculadora de notas responde correctamente.

---

## 🖤 Banner de Cookies RGPD con Humor Negro (`CookieBanner.jsx`)

- **Sátira de Privacidad**: Textos distópicos al estilo **Rockstar Games GTA V** sobre la vigilancia digital.
- **Acciones**: `[CEDER TODO SIN PREGUNTAR]`, `[MODO PARANOICO (SOLO NECESARIAS)]` y `[NEGOCIAR REHENES]`.
- **Rigor Legal**: Cumplimiento del RGPD y directrices AEPD mediante consentimiento granular en `localStorage`.

---

## 📚 Módulos Didácticos (Curso 2026/2027)

1. **SOMO — Sistemas Operativos Monopuesto** (*Grado Medio SMR | 175h*): Windows 11 Enterprise (24H2/25H2) y Ubuntu LTS 24.04.
2. **SIGE — Sistemas de Gestión Empresarial** (*Grado Superior DAM | 110h | 6 ECTS*): Odoo 17 ERP/CRM y desarrollo Python (DF 203/2011).
3. **THD — Digitalización Aplicada** (*Grado Superior ASIR/DAM/DAW | 40h | 3 ECTS*): Cloud, Ciberseguridad, Big Data, IA y Biki Digitala (DF 119/2024, LO 3/2022).

---

## 💻 Desarrollo y Validación

```bash
# Validar código (Linter Oxlint + Vite build)
npm run validate

# Servidor de desarrollo
npm run dev
```
