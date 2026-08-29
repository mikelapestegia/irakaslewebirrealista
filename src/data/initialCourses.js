export const initialCourses = [
  {
    id: "somo",
    code: "SOMO (0222)",
    image: "/images/somo.png",
    title: {
      es: "Sistemas Operativos Monopuesto",
      eu: "Sistema Eragile Monopostuak",
      en: "Single-User Operating Systems"
    },
    degree: {
      es: "CFGM Técnico en Sistemas Microinformáticos y Redes (SMR)",
      eu: "ERDI MAILAKO ZIKLOA: Mikroinformatika Sistemak eta Sareak (SMR)",
      en: "VET Technical Degree in Microcomputer Systems & Networks (SMR)"
    },
    term: "Curso 1º - 2026/2027 (~175 Horas Lectivas)",
    credits: 5,
    icon: "Cpu",
    color: "indigo",
    progress: 57,
    teacher: "Mikel",
    schedule: {
      es: "Lunes y Miércoles 08:30 - 10:30, Viernes 08:30 - 09:30 (Aula L1 / Lab 2 - CI Estella)",
      eu: "Astelehen eta Asteazkenetan 08:30 - 10:30, Ostiraletan 08:30 - 09:30 (L1 Gela / 2. Lab - LHI Lizarra)",
      en: "Mon & Wed 08:30 - 10:30, Fri 08:30 - 09:30 (Computer Lab L1 - CI Estella)"
    },
    examDate: "2026-11-20",
    description: {
      es: "Propuesta pedagógica 2026/2027 actualizada: Instalación, configuración y administración de Windows 11 Pro/Enterprise 24H2/25H2 y Ubuntu 24.04 LTS. Máquinas virtuales con VirtualBox 7, automatización con PowerShell 7 y Bash, seguridad con TPM 2.0, BitLocker, LUKS, Sysinternals y Copilot+ PCs.",
      eu: "2026/2027 Proposamen Pedagogiko Eguneratua: Windows 11 Pro 24H2 eta Ubuntu 24.04 LTS sistemen instalazioa, konfigurazioa eta administrazioa. Makina birtualak VirtualBox 7 erabiliz, automatizazioa PowerShell 7 eta Bash bidez, segurtasuna TPM 2.0, BitLocker eta LUKS-ekin, Sysinternals suitea eta IA lokalaren integrazioa.",
      en: "2026/2027 updated pedagogical proposal: Windows 11 24H2 & Ubuntu 24.04 LTS installation, setup, and administration. Virtualization with VirtualBox 7, automation with PowerShell 7 & Bash, TPM 2.0/BitLocker/LUKS security, Sysinternals, and Copilot+ AI integration."
    },
    ras: [
      { code: "RA1", weight: 20, name: { es: "Características, elementos y funciones de los sistemas operativos", eu: "Sistema eragileen ezaugarriak, osagaiak eta funtzioak ezagutzea", en: "OS features, elements, and core functions" } },
      { code: "RA2", weight: 30, name: { es: "Instalación de sistemas operativos (Windows 11 y Ubuntu 24.04)", eu: "Sistema eragileak instalatzea eta konfiguratzea (Windows 11 eta Ubuntu 24.04)", en: "OS Installation (Windows 11 & Ubuntu 24.04)" } },
      { code: "RA3", weight: 18, name: { es: "Configuración básica y automatización de sistemas operativos", eu: "Sistema eragileen oinarrizko konfigurazioa eta automatizazio-skripteak gauzatzea", en: "Basic OS Configuration & Automation" } },
      { code: "RA4", weight: 30, name: { es: "Administración básica, usuarios, servicios y seguridad", eu: "Oinarrizko administrazioa, erabiltzaileak, zerbitzuak eta segurtasuna kudeatzea", en: "OS Administration, Users, Services & Security" } },
      { code: "RA5", weight: 10, name: { es: "Creación y optimización de máquinas virtuales", eu: "Makina birtualak sortzea eta inguruneak optimizatzea", en: "Virtual Machine Creation & Optimization" } }
    ],
    gradingCriteria: [
      { name: { es: "Proyectos Prácticos Integradores (por UT)", eu: "Proiektu Praktiko Integratzaileak (UT bakoitzeko)", en: "Integrative Practical Projects (per UT)" }, weight: 50 },
      { name: { es: "Pruebas Prácticas Manos a la Obra (Instalación / Config / Diagnóstico)", eu: "Trebezia Praktikoko Azterketak (Instalazioa, Konfigurazioa eta Diagnostikoa)", en: "Hands-on Practical Exams (Installation / Config)" }, weight: 25 },
      { name: { es: "Trabajos Teórico-Prácticos, Cuestionarios e Informes", eu: "Lan Teoriko-Praktikoak, Galdetegiak eta Txostenak", en: "Theoretical-Practical Works & Reports" }, weight: 15 },
      { name: { es: "Participación, Actitud, Trabajo en Pareja y Uso Ético de IA", eu: "Parte-hartzea, Jarrera, Bikote-lana eta IAren Erabilera Etikoa", en: "Participation, Attitude & Ethical AI Usage" }, weight: 10 }
    ],
    modules: [
      { 
        id: 1, 
        ut: "UT1",
        hours: 25,
        ra: "RA1 (20%)",
        title: { 
          es: "UT1: Introducción a Sistemas Informáticos y Representación de la Información", 
          eu: "UT1: Sistema Informatikoen Sarrera eta Informazioaren Adierazpena", 
          en: "UT1: Introduction to Computer Systems & Data Representation" 
        }, 
        summary: {
          es: "Sistemas binario, hexadecimal, ASCII/UTF-8, arquitecturas de Kernel (monolítico vs microkernel), procesos y gestión de memoria, permisos NTFS ACL vs Unix rwx.",
          eu: "Zenbaki-sistemak (binarioa, hamaseitarra), ASCII/UTF-8 kodetzea, Kernel arkitekturak (monolitikoa vs mikrokernela), prozesuen kudeaketa eta NTFS ACL zein Unix rwx baimenak."
        },
        completed: true 
      },
      { 
        id: 2, 
        ut: "UT2",
        hours: 20,
        ra: "RA5 (10%)",
        title: { 
          es: "UT2: Virtualización con VirtualBox 7 y Entornos de Laboratorio", 
          eu: "UT2: Birtualizazioa VirtualBox 7 bidez eta Laborategiko Inguruneak", 
          en: "UT2: Virtualization with VirtualBox 7 & Lab Environments" 
        }, 
        summary: {
          es: "Hipervisores Tipo 1 vs Tipo 2, creación de MVs optimizadas, virtualización anidada, passthrough TPM 2.0, snapshots, redes NAT y puente, carpetas compartidas y Guest Additions.",
          eu: "1. eta 2. motako hiperbisoreak, makina birtualen optimizazioa, pesa-sarrera birtualizatua (TPM 2.0 passthrough), snapshot-ak, NAT eta zubi-sareak (Bridge) eta direktorio partekatuak."
        },
        completed: true 
      },
      { 
        id: 3, 
        ut: "UT3",
        hours: 30,
        ra: "RA2 (15%)",
        title: { 
          es: "UT3: Instalación Profesional de Windows 11 Pro/Enterprise 24H2", 
          eu: "UT3: Windows 11 Pro/Enterprise 24H2-ren Instalazio Profesionala", 
          en: "UT3: Professional Windows 11 Pro/Enterprise 24H2 Installation" 
        }, 
        summary: {
          es: "Requisitos de hardware (TPM 2.0, Secure Boot, UEFI, GPT), instalación desatendida con autounattend.xml, particionado de sistema (EFI, MSR, Recovery), controladores firmados, activación y reparación bcdboot.",
          eu: "Hardware-eskakizunak (TPM 2.0, Secure Boot, UEFI, GPT), autounattend.xml bidezko instalazio automatizatua, sistemaren partizioak (EFI, MSR, Berreskurapena) eta bcdboot konponketak."
        },
        completed: true 
      },
      { 
        id: 4, 
        ut: "UT4",
        hours: 25,
        ra: "RA2 (15%)",
        title: { 
          es: "UT4: Instalación de Ubuntu Linux 24.04 LTS, Dual-Boot y WSL2", 
          eu: "UT4: Ubuntu Linux 24.04 LTS Instalazioa, Dual-Boot eta WSL2", 
          en: "UT4: Ubuntu Linux 24.04 LTS Installation, Dual-Boot & WSL2" 
        }, 
        summary: {
          es: "Instalación de Ubuntu 24.04 LTS (Noble Numbat), particionado manual (/boot/efi, /, /home, swap), dual-boot con Windows 11 mediante GRUB, configuración de sudoers y primer entorno WSL2.",
          eu: "Ubuntu 24.04 LTS instalazioa, eskuzko partizionatzea (/boot/efi, /, /home, swap), dual-boot abiaraztea GRUB bidez, sudoers konfigurazioa eta WSL2 ingurunearen ezarpena."
        },
        completed: true 
      },
      { 
        id: 5, 
        ut: "UT5",
        hours: 25,
        ra: "RA3 (9%)",
        title: { 
          es: "UT5: Configuración de Windows 11 y Automatización con PowerShell 7", 
          eu: "UT5: Windows 11-ren Konfigurazioa eta Automatizazioa PowerShell 7-rekin", 
          en: "UT5: Windows 11 Setup & Automation with PowerShell 7" 
        }, 
        summary: {
          es: "Personalización del entorno, gestión de paquetes con winget, copias de seguridad nativas, puntos de restauración, tareas programadas y creación de scripts de automatización en PowerShell 7.",
          eu: "Ingurunearen pertsonalizazioa, winget bidezko pakete-kudeaketa, segurtasun-copia natiboak, berreskuratze-puntuak, programatutako zereginak eta PowerShell 7 skripteak."
        },
        completed: false 
      },
      { 
        id: 6, 
        ut: "UT6",
        hours: 30,
        ra: "RA4 (15%)",
        title: { 
          es: "UT6: Administración Avanzada de Windows 11, Sysinternals y Auditoría", 
          eu: "UT6: Windows 11-ren Administrazio Aurreratua, Sysinternals eta Auditoria", 
          en: "UT6: Advanced Windows 11 Administration, Sysinternals & Audit" 
        }, 
        summary: {
          es: "Gestión de usuarios y grupos locales, UAC, directivas de grupo (gpedit.msc), control de procesos y servicios con PowerShell, Sysinternals Suite (Process Explorer, Autoruns, TCPView), visor de eventos y recursos compartidos SMB 3.0.",
          eu: "Tokiko erabiltzaile eta taldeak, UAC, talde-direktibak (gpedit.msc), prozesuen kontrola PowerShell bidez, Sysinternals Suite azterketa eta SMB 3.0 baliabide partekatuak."
        },
        completed: false 
      },
      { 
        id: 7, 
        ut: "UT7",
        hours: 30,
        ra: "RA3+RA4 (16%)",
        title: { 
          es: "UT7: Configuración y Administración de Ubuntu Linux (Bash, systemctl, UFW, LUKS)", 
          eu: "UT7: Ubuntu Linux Sistemaren Konfigurazioa eta Administrazioa (Bash, systemctl, UFW, LUKS)", 
          en: "UT7: Ubuntu Linux Config & Administration (Bash, systemctl, UFW, LUKS)" 
        }, 
        summary: {
          es: "Gestión de paquetes (apt, snap, flatpak), usuarios y sudoers, servicios con systemctl y journalctl, red con netplan y nmcli, firewall UFW, montaje fstab, cifrado LUKS y automatización con Bash y cron.",
          eu: "Pakete-kudeaketa (apt, snap, flatpak), erabiltzaileak eta sudoers, zerbitzuak systemctl eta journalctl bidez, sareak netplan/nmcli bidez, UFW suebakia eta LUKS disko-zifratzea."
        },
        completed: false 
      }
    ],
    resources: [
      { id: 'r1', title: "Plantilla_Instalacion_Desatendida_autounattend_W11.xml", type: "code", size: "24 KB", date: "2026-08-25" },
      { id: 'r2', title: "Script_Bienvenida_y_Configuracion_PowerShell7.ps1", type: "code", size: "18 KB", date: "2026-08-24" },
      { id: 'r3', title: "Script_Interactivo_Administracion_Mantenimiento_Ubuntu.sh", type: "code", size: "14 KB", date: "2026-08-23" },
      { id: 'r4', title: "Guia_Practica_Diagnostico_Sysinternals_ProcessExplorer.pdf", type: "pdf", size: "4.2 MB", date: "2026-08-22" },
      { id: 'r5', title: "Manual_Tecnico_DualBoot_Windows11_Ubuntu2404_UEFI_GPT.pdf", type: "pdf", size: "5.8 MB", date: "2026-08-20" },
      { id: 'r6', title: "Laboratorio_VirtualBox7_Plantilla_MVs_W11_Ubuntu.zip", type: "zip", size: "12.4 MB", date: "2026-08-18" }
    ]
  },
  {
    id: "sige",
    code: "SIGE (0488)",
    image: "/images/sige.png",
    title: {
      es: "Sistemas de Gestión Empresarial (ERP/CRM)",
      eu: "Enpresa-kudeaketako Sistemak (ERP/CRM)",
      en: "Enterprise Management Systems (ERP/CRM)"
    },
    degree: {
      es: "CFGS Desarrollo de Aplicaciones Multiplataforma (DAM 2º) - DF 203/2011",
      eu: "GOI MAILAKO ZIKLOA: Plataforma Anitzeko Aplikazioen Garapena (DAM 2. maila) — 203/2011 Foru Dekretua",
      en: "Higher Vocational Degree in Multiplatform Application Development (DAM 2nd)"
    },
    term: "Curso 2º - 2026/2027 (110 Horas | 6 ECTS)",
    credits: 6,
    icon: "Brain",
    color: "cyan",
    progress: 60,
    teacher: "Departamento de Informática",
    schedule: {
      es: "Tutorías presenciales los Jueves 10:25 - 12:15 (Lab 2 - CI Estella / Online)",
      eu: "Aurrez aurreko tutoretzak Ostegunetan 10:25 - 12:15 (2. Lab - LHI Lizarra / Online)",
      en: "Office hours Thursdays 10:25 - 12:15 (Lab 2 - CI Estella / Online)"
    },
    examDate: "1ª Prueba: Ene 2026 | 2ª Prueba: May 2026",
    description: {
      es: "Programación oficial Decreto Foral 203/2011: Implantación, parametrización y adaptación de sistemas de gestión ERP/CRM (Odoo 17, SAP, Dynamics). Desarrollo de módulos a medida en Python y XML, consultas ORM, informes QWeb, Business Intelligence (BI) y personalización de flujos empresariales.",
      eu: "203/2011 Foru Dekretuko programazio ofiziala: ERP/CRM kudeaketa-sistemen (Odoo 17, SAP, Dynamics) ezarpena, parametrizazioa eta egokitzapena. Neurriko moduluak garatzea Python eta XML bidez, ORM kontsultak, QWeb txostenak eta Negozio Adimena (BI).",
      en: "Official Curriculum Decreto Foral 203/2011: Deployment, setup, and customization of ERP/CRM systems (Odoo 17, SAP, Dynamics). Custom module development with Python & XML, ORM queries, QWeb reports, and Business Intelligence (BI)."
    },
    ras: [
      { code: "RA1", weight: 20, name: { es: "Identifica sistemas ERP-CRM reconociendo sus características y verificando la configuración del sistema", eu: "ERP-CRM sistemak identifikatzen ditu, haien ezaugarriak aztertuz eta konfigurazioa egiaztatuz", en: "Identifies ERP-CRM systems recognizing features and validating system setup" } },
      { code: "RA2", weight: 20, name: { es: "Implanta sistemas ERP-CRM interpretando la documentación técnica e identificando las diferentes opciones y módulos", eu: "ERP-CRM sistemak ezartzen ditu, dokumentazio teknikoa interpretatuz eta modulu ezberdinak bereiziz", en: "Deploys ERP-CRM systems interpreting technical docs and module options" } },
      { code: "RA3", weight: 20, name: { es: "Realiza operaciones de gestión y consulta de la información utilizando herramientas del ERP-CRM", eu: "Informazioaren kudeaketa- eta kontsulta-eragiketak egiten ditu ERP-CRM tresnen bidez", en: "Performs data management and query operations using ERP-CRM tools" } },
      { code: "RA4", weight: 20, name: { es: "Adapta sistemas ERP-CRM identificando los requerimientos de un supuesto empresarial", eu: "ERP-CRM sistemak egokitzen ditu, enpresa baten eskakizun zehatzak analisiaren bidez bideratuz", en: "Adapts ERP-CRM systems to specific business requirements" } },
      { code: "RA5", weight: 20, name: { es: "Desarrolla componentes para un sistema ERP-CRM analizando y utilizando el lenguaje de programación incorporado", eu: "ERP-CRM sistemarako osagaiak garatzen ditu, integratutako programazio-lengoaiak aztertuz eta erabiliz", en: "Develops custom components for ERP-CRM using embedded programming languages" } }
    ],
    gradingCriteria: [
      { name: { es: "Evaluación Continua - Exámenes Presenciales y/o Proyecto (Requiere entregar ≥75% de tareas)", eu: "Etengabeko Ebaluazioa - Aurrez aurreko Azterketak / Proiektua (gutxienez zereginen % 75 entregatuta)", en: "Continuous Eval - In-person Exams & Project (Requires ≥75% submitted tasks)" }, weight: 65 },
      { name: { es: "Evaluación Continua - Tareas y Prácticas en Aula Virtual (Moodle)", eu: "Etengabeko Ebaluazioa - Online Zereginak eta Praktikak Gelan Virtualean (Moodle)", en: "Continuous Eval - Online Tasks & Labs on Moodle" }, weight: 35 },
      { name: { es: "Evaluación Final (Si entrega <75% de tareas): Examen/Proyecto Presencial (80%) + Tareas (20%)", eu: "Amaierako Ebaluazioa (zereginen <% 75 entregatuz gero): Azterketa/Proiektua (% 80) + Zereginak (% 20)", en: "Final Eval (If <75% tasks): Exam/Project (80%) + Tasks (20%)" }, weight: 100 }
    ],
    modules: [
      { 
        id: 1, 
        ut: "UT1",
        hours: 15,
        ra: "RA1 (20%)",
        dates: "07/10/2025 – 26/10/2025",
        title: { 
          es: "UT1: Identificación de sistemas ERP-CRM", 
          eu: "UT1: ERP-CRM Sistemak Identifikatzea", 
          en: "UT1: Identification of ERP-CRM Systems" 
        }, 
        summary: {
          es: "Concepto de ERP y CRM actuales (Odoo, SAP, Dynamics, Salesforce). Tipos de licencias (Open Source vs Propietario). Sistemas gestores de BBDD compatibles (PostgreSQL) y verificación de entornos.",
          eu: "Egungo ERP eta CRM kontzeptuak (Odoo, SAP, Dynamics). Lizentzia motak (kode irekia vs jabetzakoa), PostgreSQL datu-baseen kudeaketa eta inguruneen egiaztapena."
        },
        completed: true 
      },
      { 
        id: 2, 
        ut: "UT2",
        hours: 25,
        ra: "RA2 (20%)",
        dates: "27/10/2025 – 25/11/2025",
        title: { 
          es: "UT2: Instalación y configuración de sistemas ERP-CRM", 
          eu: "UT2: ERP-CRM Sistemak Instalatzea eta Konfiguratzea", 
          en: "UT2: Installation & Configuration of ERP-CRM Systems" 
        }, 
        summary: {
          es: "Arquitecturas Monopuesto, Cliente/Servidor y Cloud. Módulos de Contabilidad, Nóminas, Facturación, Comercial, Marketing y Producción. Entornos de Desarrollo, Pruebas y Explotación.",
          eu: "Monopostua, Bezero/Zerbitzari eta Cloud arkitekturak. Kontabilitatea, Nomina-kudeaketa, Fakturazioa, Merkataritza eta Ekoizpen moduluak. Garapen-, Proba- eta Ustiapen-inguruneak."
        },
        completed: true 
      },
      { 
        id: 3, 
        ut: "UT3",
        hours: 25,
        ra: "RA3 (20%)",
        dates: "26/11/2025 – 17/01/2026",
        title: { 
          es: "UT3: Organización, consulta y tratamiento de la información", 
          eu: "UT3: Informazioaren Antolaketa, Kontsulta eta Tratamendua", 
          en: "UT3: Organization, Querying & Processing of Enterprise Information" 
        }, 
        summary: {
          es: "Definición de campos, consultas ORM/SQL, formularios e informes, cálculo de pedidos, albaranes y facturas. Herramientas de Inteligencia de Negocio (Business Intelligence) y extracción de datos.",
          eu: "Eremuen definizioa, ORM/SQL kontsultak, inprimakiak eta txostenak, eskaeren eta fakturen kalkulua eta Negozio Adimena (Business Intelligence - BI) datuak erauzteko."
        },
        completed: true 
      },
      { 
        id: 4, 
        ut: "UT4",
        hours: 25,
        ra: "RA2 + RA4 (20%)",
        dates: "18/01/2026 – 27/02/2026",
        title: { 
          es: "UT4: Implantación de sistemas ERP/CRM en supuestos empresariales", 
          eu: "UT4: ERP/CRM Sistemak Ezartzea Enpresa-kasuetan", 
          en: "UT4: ERP/CRM Deployment in Business Scenarios" 
        }, 
        summary: {
          es: "Análisis de necesidades de la empresa, selección y parametrización de módulos, adaptación de tablas, vistas y consultas. Formulario e informes personalizados, paneles de control (Dashboards).",
          eu: "Enpresaren beharrak aztertzea, moduluak hautatzea eta parametrizatzea, taulak eta inprimakiak egokitzea eta aginte-panelak (Dashboards) eraikitzea."
        },
        completed: false 
      },
      { 
        id: 5, 
        ut: "UT5",
        hours: 20,
        ra: "RA5 (20%)",
        dates: "28/02/2026 – 19/04/2026",
        title: { 
          es: "UT5: Desarrollo de componentes personalizados en Python y XML", 
          eu: "UT5: Neurriko Osagaien Garapena Python eta XML bidez", 
          en: "UT5: Custom Component Development with Python & XML" 
        }, 
        summary: {
          es: "Arquitectura interna de Odoo (ORM, Módulos, Controllers). Creación de __manifest__.py, modelos de datos en Python, vistas XML (Form, Tree, Kanban), informes QWeb, llamadas a API y depuración.",
          eu: "Odooren barne-arkitektura (ORM, Moduluak, Kontrolatzaileak), __manifest__.py fitxategia, Python datu-ereduak, XML ikuspegiak (Form, Tree, Kanban) eta QWeb txostenak."
        },
        completed: false 
      }
    ],
    resources: [
      { id: 'r7', title: "Guia_Programacion_Didactica_SIGE_DF203_2011.pdf", type: "pdf", size: "3.4 MB", date: "2026-08-28" },
      { id: 'r8', title: "Estructura_de_un_Modulo_Odoo_17_Repositorio_Git.zip", type: "code", size: "2.1 MB", date: "2026-08-25" },
      { id: 'r9', title: "Manual_de_Personalizacion_de_Vistas_XML_y_ORM_Odoo.pdf", type: "pdf", size: "6.4 MB", date: "2026-08-22" },
      { id: 'r10', title: "Plan_Implantacion_ERP_CRM_Caso_Pyme_Navarra.pdf", type: "pdf", size: "4.8 MB", date: "2026-08-20" }
    ]
  },
  {
    id: "digitalizacion",
    code: "DIGITAL (1709)",
    image: "/images/digitalization.png",
    title: {
      es: "Digitalización Aplicada a los Sectores Productivos",
      eu: "Sektore Produktiboetan Aplikatutako Digitalizazioa",
      en: "Applied Digitalization in Productive Sectors"
    },
    degree: {
      es: "CFGS ASIR / DAM / DAW (1º Curso) - DF 119/2024 & Ley Orgánica 3/2022",
      eu: "GOI MAILAKO ZIKLOA: ASIR / DAM / DAW (1. maila) — 3/2022 Lege Organikoa eta 119/2024 Foru Dekretua",
      en: "Higher Vocational Degree in ASIR / DAM / DAW (1st Year) - LO 3/2022"
    },
    term: "Curso 1º - 2026/2027 (40 Horas | 3 ECTS)",
    credits: 3,
    icon: "Code2",
    color: "amber",
    progress: 85,
    teacher: "Departamento de Informática",
    schedule: {
      es: "Viernes 10:30 - 11:30 (Aula Multiusos / Lab 1 - CI Estella)",
      eu: "Ostiraletan 10:30 - 11:30 (Erabilera Anitzeko Gela / 1. Lab - LHI Lizarra)",
      en: "Fridays 10:30 - 11:30 (Multipurpose Lab - CI Estella)"
    },
    examDate: "Pruebas por UT: Oct, Nov, Ene, Feb, Mar y May 2026",
    description: {
      es: "Programación oficial Ley Orgánica 3/2022 y Decreto Foral 119/2024: Estudio de Tecnologías Habilitadoras Digitales (THD) en entornos IT y OT, Cloud Computing (IaaS, PaaS, SaaS, Edge, Fog), Inteligencia Artificial y Machine Learning, Big Data, Ciberseguridad industrial y elaboración de un Proyecto de Transformación Digital para empresas de Navarra con Formación DUAL (100h).",
      eu: "3/2022 Lege Organikoko eta 119/2024 Foru Dekretuko programazio ofiziala: Teknologia Gaitzaile Digitalen (THD) azterketa IT zein OT inguruneetan, Hodei-konputazioa (IaaS, PaaS, SaaS, Edge, Fog), Adimen Artifiziala eta Machine Learning, Big Data, zibersegurtasun industriala eta Transformazio Digitaleko Proiektua enpresan Formazio DUALarekin (100 ordu).",
      en: "Official Syllabus LO 3/2022 & DF 119/2024: Enabling Digital Technologies (KETs) in IT/OT environments, Cloud Computing (IaaS, PaaS, SaaS, Edge), Artificial Intelligence, Big Data, Cybersecurity, and Enterprise Digital Transformation Project with DUAL Internship."
    },
    ras: [
      { code: "RA1", weight: 15, name: { es: "Analiza el concepto de digitalización y su repercusión identificando entornos IT y OT", eu: "Digitalizazioaren kontzeptua eta enpresa-eragina aztertzen ditu, IT eta OT inguruneak bereiziz", en: "Analyzes digital transformation and IT/OT environment impacts" } },
      { code: "RA2", weight: 20, name: { es: "Caracteriza las tecnologías habilitadoras digitales (THD: IoT, 5G, Cobótica, Gemelos Digitales)", eu: "Teknologia Gaitzaile Digitalak (THD) ezaugarritzen ditu (IoT, 5G, Robotika Kolaboratiboa, Biki Digitalak)", en: "Characterizes Key Digital Technologies (IoT, 5G, Cobotics, Digital Twins)" } },
      { code: "RA3", weight: 15, name: { es: "Identifica sistemas basados en cloud/nube (IaaS, PaaS, SaaS, Edge, Fog) y su influencia", eu: "Hodeian oinarritutako sistemak (IaaS, PaaS, SaaS, Edge, Fog) eta horien eragina identifikatzen ditu", en: "Identifies Cloud systems (IaaS, PaaS, SaaS, Edge, Fog) and their impact" } },
      { code: "RA4", weight: 15, name: { es: "Identifica aplicaciones de la Inteligencia Artificial (IA) y su optimización en el sector", eu: "Adimen Artifizialeko (IA) aplikazioak eta prozesuen optimizazioa identifikatzen ditu sektorean", en: "Identifies AI applications and process optimization in the IT sector" } },
      { code: "RA5", weight: 15, name: { es: "Evalúa la importancia de los datos, Big Data, ciclo de vida y ciberseguridad global", eu: "Datuen garrantzia, Big Data 5V-ak, bizi-zikloa eta zibersegurtasun globala ebaluatzen ditu", en: "Evaluates data importance, Big Data 5Vs, data lifecycle, and cybersecurity" } },
      { code: "RA6", weight: 20, name: { es: "Desarrolla un proyecto de transformación digital de una empresa del sector informático", eu: "Informatika-sektoreko enpresa baten Transformazio Digitalerako Proiektua garatzen du", en: "Develops an enterprise Digital Transformation Project for IT companies" } }
    ],
    gradingCriteria: [
      { name: { es: "Evaluación Continua - Tareas y Prácticas en Aula Virtual (Moodle)", eu: "Etengabeko Ebaluazioa - Online Zereginak eta Praktikak Gela Birtualean (Moodle)", en: "Continuous Eval - Online Tasks & Exercises on Moodle" }, weight: 50 },
      { name: { es: "Evaluación Continua - Exámenes Prácticos por UT y Proyecto de Transformación Digital (UT6)", eu: "Etengabeko Ebaluazioa - Azterketa Praktikoak UT bakoitzeko eta Transformazio Digitaleko Proiektua (UT6)", en: "Continuous Eval - Practical Exams per UT & Digital Transformation Project" }, weight: 50 },
      { name: { es: "Formación DUAL en Empresa (100h en 1º curso): Ponderación sobre RAs en empresa", eu: "Enpresako DUAL Formazioa (100 ordu 1. mailan): Enpresan ebaluatutako RA-en pisua (% 10)", en: "DUAL Internship in Company (100h 1st Year): Company RAs weighting" }, weight: 10 }
    ],
    modules: [
      { 
        id: 1, 
        ut: "UT1",
        hours: 5,
        ra: "RA1 (15%)",
        dates: "Examen: Octubre 2025",
        title: { 
          es: "UT1: Digitalización en los sistemas productivos (Entornos IT y OT)", 
          eu: "UT1: Digitalizazioa Ekoizpen-sistematan (IT eta OT inguruneak)", 
          en: "UT1: Digitalization in Productive Systems (IT & OT Environments)" 
        }, 
        summary: {
          es: "Cronología de las revoluciones industriales, Sistemas Ciberfísicos (CPS), diferencias y convergencia entre entornos IT (Information Technology) y OT (Operation Technology), eficiencia de costes y desarrollo sostenible.",
          eu: "Industria-iraultzen kronologia, Sistema Ziberfisikoak (CPS), IT eta OT inguruneen arteko elkarteratzea, kostu-eraginkortasuna eta garapen jasangarria."
        },
        completed: true 
      },
      { 
        id: 2, 
        ut: "UT2",
        hours: 5,
        ra: "RA2 (20%)",
        dates: "Examen: Noviembre 2025",
        title: { 
          es: "UT2: Caracterización de Tecnologías Habilitadoras Digitales (THD)", 
          eu: "UT2: Teknologia Gaitzaile Digitalak Ezaugarritzea (THD)", 
          en: "UT2: Key Enabling Digital Technologies (KETs)" 
        }, 
        summary: {
          es: "IoT (Internet de las Cosas), redes 5G, Fibra Óptica, Blockchain/DLT, Robótica Colaborativa (Cobots), Gemelos Digitales (Digital Twins), Realidades Inmersivas (VR/AR) y Huella Digital.",
          eu: "IoT, 5G sareak, Blockchain/DLT teknologia, Robotika Kolaboratiboa (Cobots), Biki Digitalak (Digital Twins) eta Errealitate Murgiltzaileak (VR/AR)."
        },
        completed: true 
      },
      { 
        id: 3, 
        ut: "UT3",
        hours: 5,
        ra: "RA3 (15%)",
        dates: "Examen: Enero 2026",
        title: { 
          es: "UT3: Computación en la nube (Cloud, Edge, Fog y Mist)", 
          eu: "UT3: Hodei-konputazioa (Cloud, Edge, Fog eta Mist)", 
          en: "UT3: Cloud Computing (IaaS, PaaS, SaaS, Edge, Fog, Mist)" 
        }, 
        summary: {
          es: "Modelos de servicio Cloud: IaaS, PaaS y SaaS. Arquitecturas de Edge, Fog y Mist Computing para baja latencia. Interoperabilidad, trabajo cooperativo y protección de datos en sistemas conectados. (Módulo en DUAL).",
          eu: "Hodei-zerbitzuen ereduak: IaaS, PaaS eta SaaS. Edge, Fog eta Mist arkitekturak latentzia baxurako, elkarreragingarritasuna eta datuen babesa (DUAL bidez taldetua)."
        },
        completed: true 
      },
      { 
        id: 4, 
        ut: "UT4",
        hours: 5,
        ra: "RA4 (15%)",
        dates: "Examen: Febrero 2026",
        title: { 
          es: "UT4: Aplicación de la Inteligencia Artificial (IA) en la Empresa", 
          eu: "UT4: Adimen Artifizialaren (IA) Aplikazioa Enpresan", 
          en: "UT4: AI Applications & Ethics in Business" 
        }, 
        summary: {
          es: "Machine Learning, Deep Learning, IA Débil vs Fuerte, Minería de Datos, automatización de procesos, lenguajes de programación en IA (Python), regulación ética de la IA, derechos de autor y protección de datos.",
          eu: "Machine/Deep Learning, IA Ahula vs Indartsua, Datu-meatzaritza, prozesuen automatizazioa Python bidez eta IAren erregulazio etikoa (EU AI Act)."
        },
        completed: true 
      },
      { 
        id: 5, 
        ut: "UT5",
        hours: 5,
        ra: "RA5 (15%)",
        dates: "Examen: Marzo 2026",
        title: { 
          es: "UT5: Big Data, Ingeniería de Datos y Ciberseguridad Global", 
          eu: "UT5: Big Data, Datuen Ingeniaritza eta Zibersegurtasun Globala", 
          en: "UT5: Big Data, Data Engineering & Global Cybersecurity" 
        }, 
        summary: {
          es: "Dato vs Información, ciclo de vida del dato, las 5 V del Big Data (Volumen, Velocidad, Variedad, Veracidad, Valor), ingeniería de datos, almacenamiento seguro en cloud y ciberseguridad industrial IT/OT.",
          eu: "Datua vs Informazioa, Big Data 5V-ak, datuen bizi-zikloa, hodei-biltegiratze segurua eta IT/OT zibersegurtasun industriala."
        },
        completed: false 
      },
      { 
        id: 6, 
        ut: "UT6",
        hours: 5,
        ra: "RA6 (20%)",
        dates: "Examen & Entrega: Mayo 2026",
        title: { 
          es: "UT6: Memoria y Proyecto de Transformación Digital Empresarial", 
          eu: "UT6: Enpresaren Transformazio Digitaleko Proiektua", 
          en: "UT6: Enterprise Digital Transformation Roadmap & Project" 
        }, 
        summary: {
          es: "Elaboración del Plan Estratégico de Transformación Digital para una PYME de Navarra: diagnóstico de brechas IT/OT, selección de THDs, integración de ERP/CRM/Cloud, gestión del talento humano y costes de oportunidad.",
          eu: "Nafarroako PYME baten Transformazio Digitalerako Plan Estrategikoa garatzea: IT/OT arrakalen diagnostikoa, THD hautaketa eta ERP/Cloud integrazioa."
        },
        completed: false 
      }
    ],
    resources: [
      { id: 'r11', title: "Guia_Programacion_Didactica_Digitalizacion_DF119_2024.pdf", type: "pdf", size: "2.8 MB", date: "2026-08-28" },
      { id: 'r12', title: "Plantilla_Memoria_Proyecto_Transformacion_Digital_PYME.pdf", type: "pdf", size: "1.8 MB", date: "2026-08-22" },
      { id: 'r13', title: "Presentacion_Cloud_Computing_IaaS_PaaS_SaaS_Edge.pdf", type: "pdf", size: "5.2 MB", date: "2026-08-18" },
      { id: 'r14', title: "Guia_Etica_y_Regulacion_de_Inteligencia_Artificial_IA.pdf", type: "pdf", size: "3.1 MB", date: "2026-08-15" }
    ]
  }
];
