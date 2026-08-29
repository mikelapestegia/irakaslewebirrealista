export const initialQuizzes = {
  "somo": {
    flashcards: [
      {
        question: {
          es: "¿Qué requisitos de seguridad en hardware son strictly obligatorios para instalar Windows 11 24H2?",
          eu: "Hardwareko zein segurtasun-eskakizun dira derrigorrezkoak Windows 11 24H2 instalatzeko?",
          en: "Which mandatory hardware security features are required for Windows 11 24H2?"
        },
        answer: {
          es: "TPM 2.0 (Trusted Platform Module), arranque seguro Secure Boot activo, firmware UEFI y tabla de particiones GPT en un procesador compatible de 64 bits.",
          eu: "TPM 2.0 txipa, Secure Boot abiarazte segurua aktibatuta, UEFI firmwarea eta GPT partizio-taula 64 biteko prozesadore bateragarrian.",
          en: "TPM 2.0, active Secure Boot, UEFI firmware, and GPT partition table on a compatible 64-bit CPU."
        }
      },
      {
        question: {
          es: "¿Cuál es la diferencia entre el permiso chmod 755 y chmod 600 en Linux Ubuntu?",
          eu: "Zein da chmod 755 eta chmod 600 baimenen arteko aldea Linux Ubuntu-n?",
          en: "What is the difference between chmod 755 and chmod 600 in Linux Ubuntu?"
        },
        answer: {
          es: "chmod 755 da rwx al propietario y r-x a grupo/otros (ideal para scripts ejecutables). chmod 600 da lectura/escritura (rw-) SOLO al propietario (ideal para claves privadas SSH).",
          eu: "chmod 755 baimenak rwx ematen dio jabeari eta r-x taldeari zein gainerakoei. chmod 600 baimenak irakurketa/idazketa (rw-) JABEARI BAKARRIK ematen dio (SSH gako pribatuetarako egokia).",
          en: "chmod 755 grants rwx to owner and r-x to group/others. chmod 600 grants rw- ONLY to the owner (ideal for SSH private keys)."
        }
      },
      {
        question: {
          es: "¿Qué utilidad de la suite Sysinternals sustituye al Administrador de Tareas mostrando la jerarquía de procesos y handles?",
          eu: "Sysinternals suiteko zein tresnak ordezkatzen du Zereginen Kudeatzailea prozesuen hierarkia eta heldulekuak erakusteko?",
          en: "Which Sysinternals tool replaces Task Manager to display process hierarchy, DLLs, and handles?"
        },
        answer: {
          es: "Process Explorer (procexp.exe). Muestra en código de colores los procesos en árbol, consumo detallado de CPU/RAM e hilos en tiempo real.",
          eu: "Process Explorer (procexp.exe). Kolore-kode bidez erakusten ditu prozesuak zuhaitz-egituran, CPU/RAM kontsumoarekin batera denbora errealean.",
          en: "Process Explorer (procexp.exe). Displays processes in a color-coded tree with detailed CPU, RAM, threads, and handle inspection."
        }
      },
      {
        question: {
          es: "¿Qué comando de PowerShell 7 permite filtrar objetos por una propiedad específica?",
          eu: "PowerShell 7-ko zein aginduk ahalbidetzen du objektuak propietate zehatz baten bidez iragaztea?",
          en: "Which PowerShell 7 cmdlet filters objects down the pipeline based on property conditions?"
        },
        answer: {
          es: "`Where-Object` (o su alias `where` / `?`). Ejemplo: `Get-Service | Where-Object Status -eq 'Running'`",
          eu: "`Where-Object` (edo bere aliasa `where` / `?`). Adibidez: `Get-Service | Where-Object Status -eq 'Running'`",
          en: "`Where-Object` (or alias `where` / `?`). Example: `Get-Service | Where-Object Status -eq 'Running'`"
        }
      },
      {
        question: {
          es: "¿Qué ventaja ofrece el particionado GPT frente al tradicional MBR?",
          eu: "Zein abantaila du GPT partizio-taulak MBR tradizionalaren aldean?",
          en: "What advantage does GPT partition style have over legacy MBR?"
        },
        answer: {
          es: "GPT admite discos de más de 2 TB (hasta 9.4 ZB), soporta hasta 128 particiones primarias en Windows y almacena copias de seguridad de la tabla de particiones al final del disco.",
          eu: "GPT-k 2 TB baino gehiagoko diskoak (9.4 ZB arte), 128 partizio nagusi Windows-en eta partizio-taularen segurtasun-copia bat gordetzen ditu diskoaren amaieran.",
          en: "GPT supports disks over 2 TB (up to 9.4 ZB), up to 128 primary partitions in Windows, and keeps backup partition tables at the end of the disk."
        }
      }
    ],
    multipleChoice: [
      {
        id: "sq1",
        question: {
          es: "¿Qué herramienta nativa de Windows 11 se utiliza para crear respuestas de instalación desatendida mediante el archivo autounattend.xml?",
          eu: "Windows 11-ko zein tresna natibo erabiltzen da autounattend.xml erantzun-fitxategien bidezko instalazio automatizatua konfiguratzeko?",
          en: "Which Windows tool or framework configures automated installations using an autounattend.xml file?"
        },
        options: [
          { text: "Windows System Image Manager (SIM / Windows ADK)", isCorrect: true },
          { text: "DiskPart CLI", isCorrect: false },
          { text: "Sysinternals Autoruns", isCorrect: false },
          { text: "Event Viewer", isCorrect: false }
        ],
        explanation: {
          es: "Windows SIM (incluido en Windows ADK) permite crear y editar archivos de respuesta de instalación desatendida autounattend.xml para automatizar el despliegue.",
          eu: "Windows SIM tresnak autounattend.xml erantzun-fitxategiak sortzea eta editatzea ahalbidetzen du instalazio-hedapenak automatizatzeko.",
          en: "Windows System Image Manager (Windows SIM) creates and edits answer files (autounattend.xml) for automated Windows deployment."
        }
      },
      {
        id: "sq2",
        question: {
          es: "En Ubuntu 24.04 LTS con systemd, ¿qué comando muestra los registros del sistema en tiempo real filtrados por una unidad de servicio específica?",
          eu: "systemd duen Ubuntu 24.04 LTS-n, zein aginduk erakusten ditu zerbitzu zehatz baten erregistroak denbora errealean?",
          en: "In Ubuntu 24.04 LTS with systemd, which command views real-time logs for a specific service unit?"
        },
        options: [
          { text: "journalctl -u nombre_servicio -f", isCorrect: true },
          { text: "cat /var/log/syslog --tail", isCorrect: false },
          { text: "systemctl status -all", isCorrect: false },
          { text: "dmesg --clear", isCorrect: false }
        ],
        explanation: {
          es: "`journalctl -u nombre_servicio -f` filtra el diario de systemd por el servicio deseado y sigue las nuevas entradas en tiempo real (-f / follow).",
          eu: "`journalctl -u zerbitzu_izena -f` aginduak systemd egunkaria iragazten du eta erregistro berriak jarraitzen ditu denbora errealean (-f erabiliz).",
          en: "`journalctl -u service_name -f` filters systemd journal entries for that service unit and tails live output (-f)."
        }
      },
      {
        id: "sq3",
        question: {
          es: "¿Cuál es el gestor de paquetes por línea de comandos recomendado y nativo en Windows 11 para instalar software silente?",
          eu: "Zein da Windows 11-ko komando-lineako pakete-kudeatzaile natibo gomendatua softwarea automatikoki instalatzeko?",
          en: "Which native command-line package manager in Windows 11 installs and updates software silently?"
        },
        options: [
          { text: "winget (Windows Package Manager)", isCorrect: true },
          { text: "apt-get", isCorrect: false },
          { text: "npm", isCorrect: false },
          { text: "chocolatey-legacy", isCorrect: false }
        ],
        explanation: {
          es: "`winget` es el gestor oficial de Microsoft para buscar, instalar, actualizar y desinstalar aplicaciones desde la línea de comandos en Windows 11.",
          eu: "`winget` Microsoft-en kudeatzaile ofiziala da Windows 11-n aplikazioak komando-lineatik instalatzeko eta eguneratzeko.",
          en: "`winget` (Windows Package Manager) is Microsoft's official CLI tool for package discovery, installation, and upgrades."
        }
      },
      {
        id: "sq4",
        question: {
          es: "¿Qué tecnología de cifrado de disco nativa de Linux permite proteger particiones completas mediante contraseña o clave de recuperación?",
          eu: "Zein da Linux-eko diskoak zifratzeko teknologia natiboa partizio osoak pasahitzez edo berreskuratze-gako bidez babesteko?",
          en: "Which native Linux disk encryption standard secures entire partitions with passphrase protection?"
        },
        options: [
          { text: "LUKS (Linux Unified Key Setup)", isCorrect: true },
          { text: "BitLocker To Go", isCorrect: false },
          { text: "EFS (Encrypting File System)", isCorrect: false },
          { text: "NTFS Compression", isCorrect: false }
        ],
        explanation: {
          es: "LUKS (Linux Unified Key Setup) es el estándar nativo en Linux (como Ubuntu) para cifrar volúmenes de disco a nivel de bloques mediante dm-crypt.",
          eu: "LUKS Linux-eko estandar natiboa da disko-bolumenak bloke-mailan zifratzeko dm-crypt bidez.",
          en: "LUKS is the standard Linux disk encryption specification providing block-device encryption via dm-crypt."
        }
      }
    ]
  },
  "sige": {
    flashcards: [
      {
        question: {
          es: "¿Qué función cumple el archivo __manifest__.py en el desarrollo de un módulo personalizado de Odoo 17?",
          eu: "Zer funtzio betetzen du __manifest__.py fitxategiak Odoo 17 modulu pertsonalizatu bat garatzean?",
          en: "What role does the __manifest__.py file play when developing a custom Odoo 17 module?"
        },
        answer: {
          es: "Es el descriptor obligatorio del módulo. Define el nombre, versión, categoría, autor, módulos dependientes, licencias y la lista de archivos XML de vistas, seguridad y datos a cargar.",
          eu: "Moduluaren nahitaezko fitxategi deskribatzailea da. Izena, bertsioa, kategoria, egilea, menpekotasunak eta kargatu beharreko XML ikuspegi eta segurtasun-fitxategiak zehazten ditu.",
          en: "It is the mandatory module descriptor. It declares name, version, category, author, dependencies, license, and data/view XML files to load."
        }
      },
      {
        question: {
          es: "¿En qué consiste el sistema ORM (Object-Relational Mapping) en Odoo?",
          eu: "Zertan datza Odoo-ko ORM (Object-Relational Mapping) sistema?",
          en: "What is the ORM (Object-Relational Mapping) system in Odoo?"
        },
        answer: {
          es: "Abstrae la base de datos PostgreSQL mapeando clases de Python (`models.Model`) a tablas SQL automáticamente, permitiendo realizar operaciones CRUD mediante código Python estructurado.",
          eu: "PostgreSQL datu-basea abstraitzen du, Python klaseak (`models.Model`) SQL tauletara automatikoki lotuz eta CRUD eragiketak Python bidez egitea ahalbidetuz.",
          en: "It abstracts the PostgreSQL database by mapping Python classes (`models.Model`) to SQL tables, enabling CRUD operations via Python."
        }
      },
      {
        question: {
          es: "¿Qué requisitos porcentuales exige el sistema de Evaluación Continua para aprobar el módulo SIGE?",
          eu: "Zein ehuneko eskatzen ditu Etengabeko Ebaluazioak SIGE modulua gainditzeko?",
          en: "What evaluation criteria percentage applies to Continuous Evaluation in SIGE?"
        },
        answer: {
          es: "Entregar al menos el 75% de las tareas de Moodle. La nota se compone de 35% Tareas Online + 65% Exámenes Presenciales/Proyecto. Cada RA debe superarse con nota ≥ 5.0.",
          eu: "Moodle-ko zereginen gutxienez % 75 entregatzea. Kalifikazioa % 35 Online Zereginak + % 65 Aurrez Aurreko Azterketak da. Ikaskuntza Emaitza (RA) bakoitza gutxienez 5.0 notarekin gainditu behar da.",
          en: "Submitting at least 75% of Moodle tasks. Grade weighting is 35% Online Tasks + 65% In-Person Exams/Project. Each RA requires a score ≥ 5.0."
        }
      },
      {
        question: {
          es: "¿Qué motor de plantillas utiliza Odoo para generar informes en PDF como facturas y albaranes?",
          eu: "Zein txantiloi-motor erabiltzen du Odook PDF txostenak eta fakturak sortzeko?",
          en: "Which template engine does Odoo use to render PDF reports such as invoices and delivery notes?"
        },
        answer: {
          es: "QWeb. Es un motor de plantillas basado en XML/HTML que se combina con wkhtmltopdf para renderizar documentos empresariales dinámicos.",
          eu: "QWeb. XML/HTML bidezko txantiloi-motorra da, wkhtmltopdf tresnarekin konbinatuz PDF enpresa-dokumentu dinamikoak sortzeko.",
          en: "QWeb. An XML/HTML-based templating engine integrated with wkhtmltopdf for dynamic corporate PDF rendering."
        }
      }
    ],
    multipleChoice: [
      {
        id: "sq5",
        question: {
          es: "¿En qué archivo de un módulo de Odoo se definen la versión, dependencias, autor y vistas XML?",
          eu: "Odoo modulu baten zein fitxategitan definitzen dira bertsioa, mendetasunak, egilea eta XML ikuspegiak?",
          en: "In which file of an Odoo custom module are version, dependencies, author, and XML views declared?"
        },
        options: [
          { text: "__manifest__.py", isCorrect: true },
          { text: "config.json", isCorrect: false },
          { text: "models.py", isCorrect: false },
          { text: "setup.exe", isCorrect: false }
        ],
        explanation: {
          es: "`__manifest__.py` es el descriptor principal que indica a Odoo la estructura y metadatos del módulo.",
          eu: "`__manifest__.py` fitxategia Odoori moduluaren metadatuak eta egitura adierazten dizkion deskribatzaile nagusia da.",
          en: "`__manifest__.py` is the main descriptor file declaring module metadata, dependencies, and view files in Odoo."
        }
      },
      {
        id: "sq6",
        question: {
          es: "Según la programación de SIGE (Decreto Foral 203/2011), ¿cuál es el peso de ponderación de cada uno de los 5 Resultados de Aprendizaje (RA1 a RA5)?",
          eu: "SIGEren programazioaren arabera (203/2011 Foru Dekretua), zein da 5 Ikaskuntza Emaitzen (RA1-RA5) pisua?",
          en: "According to SIGE syllabus (Decreto Foral 203/2011), what is the weight of each of the 5 Learning Outcomes (RA1 to RA5)?"
        },
        options: [
          { text: "Exactamente 20% cada uno (20% x 5 = 100%)", isCorrect: true },
          { text: "RA1: 50%, RA2: 30%, RA3: 20%", isCorrect: false },
          { text: "RA5 vale 60% y el resto 10%", isCorrect: false },
          { text: "No tienen ponderación fija", isCorrect: false }
        ],
        explanation: {
          es: "En el diseño curricular oficial de SIGE, los 5 RAs se ponderan al 20% cada uno para sumar el 100% de la nota final del módulo.",
          eu: "SIGEren curriculumean 5 RA-ak % 20 ponderatzen dira bakoitza, azken notaren % 100 osatzeko.",
          en: "In the official SIGE curriculum, all 5 Learning Outcomes are weighted equally at 20% each to total 100%."
        }
      },
      {
        id: "sq7",
        question: {
          es: "¿Qué gestor de base de datos relacional es el estándar obligatorio utilizado por Odoo ERP?",
          eu: "Zein da Odoo ERP-k erabiltzen duen datu-base kudeatzaile erlazional estandar nahitaezkoa?",
          en: "Which relational database management system (RDBMS) is the mandatory default used by Odoo ERP?"
        },
        options: [
          { text: "PostgreSQL", isCorrect: true },
          { text: "MySQL", isCorrect: false },
          { text: "Microsoft Access", isCorrect: false },
          { text: "SQLite", isCorrect: false }
        ],
        explanation: {
          es: "Odoo está construido nativamente sobre PostgreSQL para garantizar alta concurrencia, transaccionalidad ACID y rendimiento en entornos empresariales.",
          eu: "Odoo natiboki PostgreSQL gainean eraikita dago transakzionalitatea eta errendimendua bermatzeko.",
          en: "Odoo is natively built on top of PostgreSQL to ensure enterprise ACID compliance, concurrency, and performance."
        }
      }
    ]
  },
  "digitalizacion": {
    flashcards: [
      {
        question: {
          es: "¿Cuál es la principal diferencia entre un entorno IT (Information Technology) y un entorno OT (Operation Technology)?",
          eu: "Zein da IT (Informazio Teknologia) eta OT (Eragiketa Teknologia) inguruneen arteko alde nagusia?",
          en: "What is the main difference between IT (Information Technology) and OT (Operation Technology) environments?"
        },
        answer: {
          es: "El entorno IT se enfoca en el tratamiento, almacenamiento y gestión de la información empresarial (software, BBDD), mientras que el entorno OT controla y monitoriza dispositivos físicos, sensores y procesos en planta industrial (PLCs, SCADA).",
          eu: "IT inguruneak informazio korporatiboaren kudeaketa du helburu (softwarea, datu-baseak), eta OT inguruneak lantegiko gailu fisikoak zein ekoizpen-prozesuak (PLCak, SCADA) kontrolatzen ditu.",
          en: "IT manages corporate data, software, and databases, while OT directly monitors and controls physical machinery and industrial plant processes (PLCs, SCADA)."
        }
      },
      {
        question: {
          es: "¿En qué se diferencia el Edge Computing del Fog y del Cloud Computing tradicional?",
          eu: "Zertan bereizten dira Edge Computing, Fog eta hodei-konputazio (Cloud Computing) tradizionala?",
          en: "How does Edge Computing differ from Fog Computing and traditional Cloud Computing?"
        },
        answer: {
          es: "Edge Computing procesa los datos directamente en el propio dispositivo IoT o sensor (latencia ultrabaja); Fog procesa en la red local/gateway cercana; Cloud procesa en servidores remotos centralizados.",
          eu: "Edge Computing-ek IoT gailuan bertan prozesatzen ditu datuak (latentzia oso baxua lortuz); Fog-ek tokiko atebideetan (gateways); eta Cloud-ek urruneko zerbitzari zentralizatuetan.",
          en: "Edge Computing processes data on the IoT device itself for ultra-low latency; Fog operates on local gateways; Cloud processes in remote centralized data centers."
        }
      },
      {
        question: {
          es: "¿Cuáles son las 5 V fundamentales que caracterizan el tratamiento de Big Data?",
          eu: "Zein dira Big Data prozesatzea ezaugarritzen duten 5 V nagusiak?",
          en: "What are the 5 Vs that define Big Data engineering?"
        },
        answer: {
          es: "Volumen (cantidad masiva), Velocidad (procesamiento en tiempo real), Variedad (datos estructurados y no estructurados), Veracidad (fiabilidad) y Valor (utilidad para el negocio).",
          eu: "Bolumena (masiboa), Abiadura (denbora erreala), Barietatea (egituratua/ez-egituratua), Egiazkotasuna (fidagarritasuna) eta Balioa enpresarentzat.",
          en: "Volume (massive scale), Velocity (real-time stream), Variety (structured & unstructured), Veracity (data quality), and Value (business usefulness)."
        }
      },
      {
        question: {
          es: "¿Qué porcentaje de repercusión tiene la evaluación de las actividades en la empresa durante la Formación DUAL sobre los RAs asignados?",
          eu: "Zein ehunekoko eragina du enpresako DUAL Formazioaren ebaluazioak esleitutako Ikaskuntza Emaitzen notan?",
          en: "What percentage weighting does the DUAL company assessment carry over the assigned Learning Outcome?"
        },
        answer: {
          es: "Las actividades evaluadas por el tutor de la empresa en la estancia DUAL tienen un peso del 10% sobre la nota total del RA asignado (el 90% restante corresponde a las actividades realizadas en el centro educativo).",
          eu: "Enpresako tutoreak DUAL egonaldian ebaluatutako jarduerek % 10eko pisua dute esleitutako RAren nota osoan (% 90 ikastetxeko jarduerei dagokie).",
          en: "Activities evaluated by the company mentor in DUAL count for 10% of the assigned RA grade (the remaining 90% is evaluated at the educational center)."
        }
      }
    ],
    multipleChoice: [
      {
        id: "sq8",
        question: {
          es: "¿Qué modelo de servicio en la Nube proporciona la infraestructura física para que el cliente instale su sistema operativo?",
          eu: "Hodei-zerbitzuen zein ereduk eskaintzen du azpiegitura birtuala bezeroak bere sistema eragilea instalatzeko?",
          en: "Which cloud service model provides raw infrastructure for clients to deploy OS and software?"
        },
        options: [
          { text: "IaaS (Infrastructure as a Service)", isCorrect: true },
          { text: "SaaS (Software as a Service)", isCorrect: false },
          { text: "PaaS (Platform as a Service)", isCorrect: false },
          { text: "FaaS (Function as a Service)", isCorrect: false }
        ],
        explanation: {
          es: "IaaS proporciona recursos informáticos brutos virtuales sobre los cuales el cliente configura todo el stack.",
          eu: "IaaS azpiegitura konputazional birtuala da, non bezeroak sistema eragile osoa eta softwarea konfiguratzeko askatasuna duen.",
          en: "IaaS provides raw virtualized computing resources for full operating system and software control."
        }
      },
      {
        id: "sq9",
        question: {
          es: "Según la programación oficial de Digitalización (DF 119/2024 / LO 3/2022), ¿qué porcentaje de faltas de asistencia acumuladas en una evaluación supone pasar al Sistema de Evaluación Final?",
          eu: "Digitalizazioaren programazio ofizialaren arabera (119/2024 Foru Dekretua), zein da asistentzia-falta portzentajea Etengabeko Ebaluazioa galtzeko?",
          en: "According to Digitalization official syllabus (DF 119/2024), what absence percentage leads to loss of continuous evaluation?"
        },
        options: [
          { text: "25% de faltas (4 horas acumuladas en una evaluación de 13h)", isCorrect: true },
          { text: "50% de faltas", isCorrect: false },
          { text: "10% de faltas", isCorrect: false },
          { text: "No hay límite de faltas", isCorrect: false }
        ],
        explanation: {
          es: "Al tener el módulo 40h anuales (~13h por evaluación), la acumulación del 25% de faltas (4h) supone el paso automático a Evaluación Final.",
          eu: "Moduluak urtean 40 ordu dituenez (~13 ordu ebaluazioko), faltak % 25era (4 ordu) iristean, automatikoki Amaierako Ebaluaziora igarotzen da.",
          en: "Since the module has 40 hours per year (~13h per term), accumulating 25% of absences (4 hours) triggers final evaluation mode."
        }
      },
      {
        id: "sq10",
        question: {
          es: "¿Qué tecnología habilitadora digital permite crear una réplica virtual dinámica y en tiempo real de un proceso o activo físico industrial?",
          eu: "Zein Teknologia Gaitzaile Digitalek (THD) ahalbidetzen du industria-aktibo fisiko baten eredu birtual dinamikoa denbora errealean sortzea?",
          en: "Which Key Enabling Digital Technology creates a dynamic, real-time virtual replica of a physical industrial process?"
        },
        options: [
          { text: "Gemelo Digital (Digital Twin)", isCorrect: true },
          { text: "Cobot industrial", isCorrect: false },
          { text: "Red DLT / Blockchain", isCorrect: false },
          { text: "Fibra Óptica Monomodo", isCorrect: false }
        ],
        explanation: {
          es: "Un Gemelo Digital (Digital Twin) es una representación virtual actualizada en tiempo real mediante datos de sensores IoT de un objeto o sistema físico.",
          eu: "Biki Digital bat (Digital Twin) aktibo fisiko baten birtualizazio birtuala da, IoT sentsoreen bidez denbora errealean eguneratzen dena.",
          en: "A Digital Twin is a virtual model updated in real-time using IoT sensor data to simulate physical performance and behavior."
        }
      }
    ]
  }
};
