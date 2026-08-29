import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  CheckCircle, 
  Circle, 
  FileText, 
  Download, 
  BookOpen, 
  UserCheck,
  Award,
  Layers,
  Briefcase,
  Terminal,
  GraduationCap
} from 'lucide-react';

export const CourseDetailModal = ({ course, onClose, onOpenBooking }) => {
  const { lang, getLocalized, toggleModuleCompletion } = useApp();
  const [activeTab, setActiveTab] = useState('syllabus');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const text = {
    syllabus: { es: "UNIDADES DE TRABAJO (UTs)", eu: "LAN UNITATEAK (UT-ak)", en: "UNITS OF WORK (UTs)" },
    ras: { es: "RESULTADOS DE APRENDIZAJE (RA)", eu: "IKASKETAREN EMAITZAK (RA)", en: "LEARNING OUTCOMES (RA)" },
    proposal: { es: "PROGRAMACIÓN PEDAGÓGICA", eu: "PROGRAMAZIO PEDAGOGIKOA", en: "PEDAGOGICAL PLAN" },
    materials: { es: "MATERIALES Y APUNTES", eu: "MATERIALAK ETA OHARRAK", en: "MATERIALS & RESOURCES" },
    evaluation: { es: "CRITERIOS DE EVALUACIÓN", eu: "EBALUAZIO IRIZPIDEAK", en: "GRADING CRITERIA" },
    bookTutoring: { es: "PEDIR TUTORÍA DE ESTE MÓDULO", eu: "MODULU HONETAKO TUTORETZA ESKATU", en: "BOOK TUTORING FOR THIS MODULE" },
    examDate: { es: "FECHA DE EXAMEN", eu: "AZTERKETA DATA", en: "EXAM DATE" },
    schedule: { es: "HORARIO DE CLASE / TUTORÍAS", eu: "KLASE ORDUTEGIA / TUTORETZAK", en: "SCHEDULE / OFFICE HOURS" },
    credits: { es: "HORAS ANUALES", eu: "URTEKO ORDUAK", en: "ANNUAL HOURS" },
    closeBtn: { es: "Cerrar detalles del módulo", eu: "Itxi moduluaren xehetasunak", en: "Close module details" }
  };

  const completedCount = course.modules.filter(m => m.completed).length;
  const progressPct = Math.round((completedCount / course.modules.length) * 100);
  const resourceList = course.resources || course.materials || [];

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="course-detail-title">
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        id="course-detail-modal"
        style={{ maxWidth: '950px', width: '95%' }}
      >
        <button 
          onClick={onClose} 
          className="modal-close-btn"
          id="btn-close-modal"
          aria-label={text.closeBtn[lang] || text.closeBtn['es']}
        >
          <X size={20} />
        </button>

        {/* Modal Banner Header */}
        <div style={{ position: 'relative', width: '100%', height: '220px', background: '#000000', overflow: 'hidden' }}>
          {course.image && (
            <img 
              src={course.image} 
              alt={getLocalized(course.title)}
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.65) contrast(1.2)' }}
            />
          )}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, #0d0d0d 100%)'
          }} />

          <div style={{ position: 'absolute', bottom: '1.5rem', left: '2rem', right: '2rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
              <span className="badge badge-amber" style={{ fontSize: '0.8rem', padding: '0.3rem 0.6rem' }}>{course.code}</span>
              <span className="badge badge-emerald" style={{ fontSize: '0.8rem', padding: '0.3rem 0.6rem' }}>
                {course.id === 'sige' ? '110 HORAS (6 ECTS)' : course.id === 'digitalizacion' ? '40 HORAS (3 ECTS)' : '175 HORAS LECTIVAS'}
              </span>
              <span className="badge badge-indigo" style={{ fontSize: '0.8rem', padding: '0.3rem 0.6rem' }}>
                {course.id === 'sige' ? 'ODOO 17 + PYTHON' : course.id === 'digitalizacion' ? 'LEY ORGÁNICA 3/2022 & DUAL' : 'W11 24H2 + UBUNTU 24.04'}
              </span>
            </div>
            <h2 id="course-detail-title" style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1.1 }}>
              {getLocalized(course.title)}
            </h2>
            <div style={{ fontSize: '0.9rem', color: 'var(--accent)', fontFamily: 'var(--font-display)', fontWeight: 700, marginTop: '0.2rem' }}>
              {getLocalized(course.degree)} {course.teacher === 'Mikel' ? '· PROFESOR: Mikel' : '· DEPARTAMENTO DE INFORMÁTICA'}
            </div>
          </div>
        </div>

        {/* Modal Content Body */}
        <div style={{ padding: '0 2rem 2rem' }}>
          <p style={{ color: 'var(--gray-300)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            {getLocalized(course.description)}
          </p>

          {/* Quick Meta Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1px', background: 'var(--border-strong)', border: '1px solid var(--border-strong)', marginBottom: '1.75rem' }}>
            <div style={{ padding: '0.85rem 1.25rem', background: '#111111' }}>
              <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gray-400)', marginBottom: '0.2rem' }}>{text.schedule[lang]}</div>
              <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--white)' }}>{getLocalized(course.schedule)}</div>
            </div>
            <div style={{ padding: '0.85rem 1.25rem', background: '#111111' }}>
              <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gray-400)', marginBottom: '0.2rem' }}>{text.examDate[lang]}</div>
              <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--accent)' }}>{course.examDate}</div>
            </div>
            <div style={{ padding: '0.85rem 1.25rem', background: '#111111' }}>
              <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gray-400)', marginBottom: '0.2rem' }}>PROGRESO DEL TEMARIO</div>
              <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--white)' }}>{completedCount} / {course.modules.length} UTs ({progressPct}%)</div>
            </div>
          </div>

          {/* Modal Tabs Header */}
          <div className="tab-list" style={{ marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <button 
              className={`tab-btn ${activeTab === 'syllabus' ? 'active' : ''}`}
              onClick={() => setActiveTab('syllabus')}
            >
              <BookOpen size={16} />
              <span>{text.syllabus[lang]}</span>
            </button>
            {course.ras && (
              <button 
                className={`tab-btn ${activeTab === 'ras' ? 'active' : ''}`}
                onClick={() => setActiveTab('ras')}
              >
                <Layers size={16} />
                <span>{text.ras[lang]}</span>
              </button>
            )}
            <button 
              className={`tab-btn ${activeTab === 'proposal' ? 'active' : ''}`}
              onClick={() => setActiveTab('proposal')}
            >
              <Briefcase size={16} />
              <span>{text.proposal[lang]}</span>
            </button>
            <button 
              className={`tab-btn ${activeTab === 'materials' ? 'active' : ''}`}
              onClick={() => setActiveTab('materials')}
            >
              <FileText size={16} />
              <span>{text.materials[lang]}</span>
            </button>
            <button 
              className={`tab-btn ${activeTab === 'evaluation' ? 'active' : ''}`}
              onClick={() => setActiveTab('evaluation')}
            >
              <Award size={16} />
              <span>{text.evaluation[lang]}</span>
            </button>
          </div>

          {/* Tab 1: Syllabus & Modules */}
          {activeTab === 'syllabus' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {course.modules.map((mod) => (
                <div 
                  key={mod.id}
                  style={{
                    padding: '1.25rem',
                    background: mod.completed ? '#0a1a0d' : '#111111',
                    border: `1px solid ${mod.completed ? '#3fb950' : 'var(--border-strong)'}`,
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '1rem'
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                      <span className="badge badge-amber" style={{ fontSize: '0.7rem' }}>{mod.ut || `UT${mod.id}`}</span>
                      {mod.hours && <span className="badge badge-indigo" style={{ fontSize: '0.7rem' }}>~{mod.hours}h</span>}
                      {mod.ra && <span className="badge badge-emerald" style={{ fontSize: '0.7rem' }}>{mod.ra}</span>}
                      {mod.dates && <span className="badge badge-amber" style={{ fontSize: '0.7rem' }}>{mod.dates}</span>}
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--white)' }}>{getLocalized(mod.title)}</h4>
                    </div>
                    {mod.summary && (
                      <p style={{ color: 'var(--gray-300)', fontSize: '0.875rem', marginTop: '0.3rem', lineHeight: 1.5 }}>
                        {getLocalized(mod.summary)}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => toggleModuleCompletion(course.id, mod.id)}
                    className={`btn btn-sm ${mod.completed ? 'btn-primary' : 'btn-secondary'}`}
                    style={{ flexShrink: 0, marginTop: '0.2rem' }}
                  >
                    {mod.completed ? <CheckCircle size={15} /> : <Circle size={15} />}
                    <span>{mod.completed ? (lang === 'eu' ? 'EGINDA' : 'COMPLETADO') : (lang === 'eu' ? 'EGIN GABE' : 'MARCAR HECHO')}</span>
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: Learning Outcomes (RA) */}
          {activeTab === 'ras' && course.ras && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ background: '#000000', border: '1px solid var(--accent)', padding: '1rem', marginBottom: '0.5rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--accent)', fontFamily: 'var(--font-display)' }}>
                  RESULTADOS DE APRENDIZAJE OFICIALES Y PONDERACIÓN
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--gray-300)', marginTop: '0.2rem' }}>
                  {course.id === 'digitalizacion'
                    ? 'Programación oficial Ley Orgánica 3/2022 y Decreto Foral 119/2024. RA1(15%), RA2(20%), RA3(15%), RA4(15%), RA5(15%), RA6(20%). Es necesario superar al menos el 50% de cada RA.'
                    : course.id === 'sige' 
                    ? 'El módulo SIGE evalúa al alumnado según los 5 Resultados de Aprendizaje oficiales (RA1 a RA5), ponderados al 20% cada uno. Se exige una calificación ≥ 5.0 en CADA RA para superar el módulo.' 
                    : 'El módulo evalúa al alumnado según los Resultados de Aprendizaje oficiales del currículo de FP.'}
                </p>
              </div>

              {course.ras.map((raItem, idx) => (
                <div key={idx} style={{ background: '#111111', border: '1px solid var(--border-strong)', padding: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <span className="badge badge-amber" style={{ fontSize: '0.85rem', fontWeight: 900 }}>{raItem.code}</span>
                    <span style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--accent)', fontFamily: 'var(--font-display)' }}>PONDERACIÓN: {raItem.weight}%</span>
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--white)', marginTop: '0.25rem' }}>
                    {getLocalized(raItem.name)}
                  </h4>
                </div>
              ))}
            </div>
          )}

          {/* Tab 3: Pedagogical Proposal / Official Programming */}
          {activeTab === 'proposal' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {course.id === 'digitalizacion' ? (
                /* DIGITALIZACION SPECIFIC PROGRAMMING (Rebeca Oroz Beorlegui / DF 119/2024 / LO 3/2022) */
                <>
                  <div style={{ background: '#111111', border: '1px solid var(--border-strong)', padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--accent)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Briefcase size={20} />
                      PROGRAMACIÓN DIDÁCTICA DIGITALIZACIÓN — CURSO 2026/2027
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', marginBottom: '1rem', fontSize: '0.85rem' }}>
                      <div style={{ background: '#000000', padding: '0.75rem', border: '1px solid var(--border)' }}>
                        <strong>Departamento:</strong> Departamento de Informática
                      </div>
                      <div style={{ background: '#000000', padding: '0.75rem', border: '1px solid var(--border)' }}>
                        <strong>Grupo:</strong> 1 DM/DW (ASIR / DAM / DAW 1º)
                      </div>
                      <div style={{ background: '#000000', padding: '0.75rem', border: '1px solid var(--border)' }}>
                        <strong>Duración:</strong> 40 Horas (1h/semana) · 3 ECTS
                      </div>
                      <div style={{ background: '#000000', padding: '0.75rem', border: '1px solid var(--border)' }}>
                        <strong>Normativa:</strong> DF 119/2024 & LO 3/2022
                      </div>
                    </div>

                    <p style={{ color: 'var(--gray-200)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      Este módulo transversal desarrolla las competencias en <strong>Tecnologías Habilitadoras Digitales (THD)</strong>: Cloud Computing (IaaS, PaaS, SaaS, Edge, Fog), Inteligencia Artificial y Machine Learning, Big Data, Ciberseguridad industrial IT/OT y la elaboración de un <strong>Proyecto de Transformación Digital (UT6)</strong>.
                    </p>
                  </div>

                  {/* Dual Internship System */}
                  <div style={{ background: '#111111', border: '1px solid var(--border-strong)', padding: '1.25rem' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--white)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <GraduationCap size={18} color="var(--accent)" /> FORMACIÓN DUAL EN EMPRESA (100H EN 1º CURSO)
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--gray-300)', marginBottom: '0.8rem', lineHeight: 1.5 }}>
                      El <strong>RA3 (Cloud Computing)</strong> es susceptible de trabajarse durante la estancia DUAL. Las actividades evaluadas por el tutor de empresa ponderan un <strong>10%</strong> sobre la nota final del RA (el centro evalúa el 90% restante).
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.5rem', fontSize: '0.8rem' }}>
                      <div style={{ background: '#000000', padding: '0.6rem', border: '1px solid var(--border)' }}>
                        <strong style={{ color: 'var(--accent)' }}>50% Rendimiento:</strong> Nota media de módulos
                      </div>
                      <div style={{ background: '#000000', padding: '0.6rem', border: '1px solid var(--border)' }}>
                        <strong style={{ color: 'var(--accent)' }}>30% Asistencia:</strong> Control de faltas/retrasos
                      </div>
                      <div style={{ background: '#000000', padding: '0.6rem', border: '1px solid var(--border)' }}>
                        <strong style={{ color: 'var(--accent)' }}>15% Convivencia:</strong> Ausencia de partes
                      </div>
                      <div style={{ background: '#000000', padding: '0.6rem', border: '1px solid var(--border)' }}>
                        <strong style={{ color: 'var(--accent)' }}>5% Transversales:</strong> Trabajo en equipo e innovación
                      </div>
                    </div>
                  </div>

                  {/* Evaluation Systems (Continuous vs Final) */}
                  <div style={{ background: '#111111', border: '1px solid var(--border-strong)', padding: '1.25rem' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--white)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Award size={18} color="var(--accent)" /> CRITERIOS DE CALIFICACIÓN Y FALTAS (ORDEN FORAL 21/2019)
                    </h4>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                      <div style={{ background: '#000000', padding: '1rem', border: '1px solid #3fb950' }}>
                        <div style={{ fontSize: '0.8rem', color: '#3fb950', fontWeight: 900, fontFamily: 'var(--font-display)', marginBottom: '0.3rem' }}>
                          EVALUACIÓN CONTINUA (50% TAREAS + 50% EXÁMENES)
                        </div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--white)', fontWeight: 700 }}>
                          • Tareas y Prácticas en Moodle: <span style={{ color: 'var(--accent)' }}>50%</span><br />
                          • Exámenes Prácticos por UT y Proyecto (UT6): <span style={{ color: 'var(--accent)' }}>50%</span>
                        </div>
                      </div>

                      <div style={{ background: '#000000', padding: '1rem', border: '1px solid var(--border-strong)' }}>
                        <div style={{ fontSize: '0.8rem', color: 'var(--amber)', fontWeight: 900, fontFamily: 'var(--font-display)', marginBottom: '0.3rem' }}>
                          PÉRDIDA DE CONTINUA (&gt; 25% FALTAS DE ASISTENCIA)
                        </div>
                        <p style={{ fontSize: '0.8rem', color: 'var(--gray-300)', marginBottom: '0.5rem' }}>
                          Acumular <strong>4 faltas de asistencia</strong> (25% de 13h/evaluación) supone pasar a Evaluación Final: Examen/Proyecto (80%) + Tareas (20%).
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : course.id === 'sige' ? (
                /* SIGE SPECIFIC PROGRAMMING (Jose Ruiz Larsson / Decreto Foral 203/2011) */
                <>
                  <div style={{ background: '#111111', border: '1px solid var(--border-strong)', padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--accent)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Briefcase size={20} />
                      PROGRAMACIÓN DIDÁCTICA OFICIAL SIGE — CURSO 2026/2027
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', marginBottom: '1rem', fontSize: '0.85rem' }}>
                      <div style={{ background: '#000000', padding: '0.75rem', border: '1px solid var(--border)' }}>
                        <strong>Departamento:</strong> Departamento de Informática
                      </div>
                      <div style={{ background: '#000000', padding: '0.75rem', border: '1px solid var(--border)' }}>
                        <strong>Grupo:</strong> 2DM (DAM 2º) · ECTS: 6
                      </div>
                      <div style={{ background: '#000000', padding: '0.75rem', border: '1px solid var(--border)' }}>
                        <strong>Duración:</strong> 110 Horas Anuales
                      </div>
                      <div style={{ background: '#000000', padding: '0.75rem', border: '1px solid var(--border)' }}>
                        <strong>Normativa:</strong> Decreto Foral 203/2011
                      </div>
                    </div>

                    <p style={{ color: 'var(--gray-200)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      El objetivo del módulo <strong>Sistemas de Gestión Empresarial (SIGE)</strong> es formar al alumnado para la implantación, adaptación y administración de sistemas ERP/CRM (Odoo 17, SAP, Dynamics) y el desarrollo de módulos personalizados en Python y XML sobre la plataforma.
                    </p>
                  </div>

                  <div style={{ background: '#111111', border: '1px solid var(--border-strong)', padding: '1.25rem' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--white)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Award size={18} color="var(--accent)" /> SISTEMAS DE EVALUACIÓN (ORDEN FORAL 21/2019)
                    </h4>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                      <div style={{ background: '#000000', padding: '1rem', border: '1px solid #3fb950' }}>
                        <div style={{ fontSize: '0.8rem', color: '#3fb950', fontWeight: 900, fontFamily: 'var(--font-display)', marginBottom: '0.3rem' }}>
                          EVALUACIÓN CONTINUA (RECOMENDADA)
                        </div>
                        <p style={{ fontSize: '0.8rem', color: 'var(--gray-300)', marginBottom: '0.6rem' }}>
                          Requisito: Entregar al menos el <strong>75%</strong> de las tareas en Moodle en plazo.
                        </p>
                        <div style={{ fontSize: '0.85rem', color: 'var(--white)', fontWeight: 700 }}>
                          • Exámenes y/o Proyecto Presencial: <span style={{ color: 'var(--accent)' }}>65%</span><br />
                          • Tareas y Prácticas Online: <span style={{ color: 'var(--accent)' }}>35%</span>
                        </div>
                      </div>

                      <div style={{ background: '#000000', padding: '1rem', border: '1px solid var(--border-strong)' }}>
                        <div style={{ fontSize: '0.8rem', color: 'var(--amber)', fontWeight: 900, fontFamily: 'var(--font-display)', marginBottom: '0.3rem' }}>
                          EVALUACIÓN FINAL (PÉRDIDA DE CONTINUA)
                        </div>
                        <p style={{ fontSize: '0.8rem', color: 'var(--gray-300)', marginBottom: '0.6rem' }}>
                          Se aplica si se entrega menos del 75% de las tareas de la evaluación.
                        </p>
                        <div style={{ fontSize: '0.85rem', color: 'var(--white)', fontWeight: 700 }}>
                          • Examen y Proyecto Presencial: <span style={{ color: 'var(--accent)' }}>80%</span><br />
                          • Tareas Complementarias: <span style={{ color: 'var(--accent)' }}>20%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                /* SOMO & OTHER COURSES PEDAGOGICAL PROPOSAL */
                <>
                  <div style={{ background: '#111111', border: '1px solid var(--border-strong)', padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--accent)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Briefcase size={20} />
                      RESUMEN EJECUTIVO DE LA PROPUESTA PEDAGÓGICA (2026/2027)
                    </h3>
                    <p style={{ color: 'var(--gray-200)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                      Esta propuesta actualiza el módulo <strong>Sistemas Operativos Monopuesto (SOMO)</strong> para el curso 2026/2027. Con el fin de soporte de Windows 10 en octubre de 2025 y la consolidación de Windows 11 Pro/Enterprise 24H2 como estándar del mercado, el técnico SMR debe dominar la instalación desatendida, automatización con <strong>PowerShell 7 y Bash</strong>, virtualización con <strong>VirtualBox 7</strong>, seguridad mediante <strong>TPM 2.0, BitLocker y LUKS</strong>, e integración de IA en entornos locales.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
                      <div style={{ background: '#000000', padding: '0.85rem', border: '1px solid var(--border)' }}>
                        <div style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 800 }}>EMPLEABILIDAD SEPE 2025</div>
                        <div style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--white)' }}>&gt; 70% Inserción</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--gray-400)' }}>En menos de 1 año tras egresar</div>
                      </div>
                      <div style={{ background: '#000000', padding: '0.85rem', border: '1px solid var(--border)' }}>
                        <div style={{ fontSize: '0.75rem', color: '#3fb950', fontWeight: 800 }}>SALARIO INICIAL JUNIOR</div>
                        <div style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--white)' }}>18.000 - 23.000 €</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--gray-400)' }}>Técnico de soporte IT Nivel 1</div>
                      </div>
                      <div style={{ background: '#000000', padding: '0.85rem', border: '1px solid var(--border)' }}>
                        <div style={{ fontSize: '0.75rem', color: '#58a6ff', fontWeight: 800 }}>MIGRACIÓN W11 24H2</div>
                        <div style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--white)' }}>60,1% Empresa</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--gray-400)' }}>Fin soporte W10 en Octubre 2025</div>
                      </div>
                    </div>
                  </div>

                  <div style={{ background: '#111111', border: '1px solid var(--border-strong)', padding: '1.25rem' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--white)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Terminal size={18} color="var(--accent)" /> TABLA DE EQUIVALENCIAS DE HERRAMIENTAS (2026/2027)
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.5fr', padding: '0.5rem 0.75rem', background: '#000000', fontWeight: 800, color: 'var(--accent)', fontFamily: 'var(--font-display)' }}>
                        <span>OBSOLETO / ANTERIOR</span>
                        <span>NUEVO ESTÁNDAR 2026/2027</span>
                        <span>MOTIVO TÉCNICO</span>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.5fr', padding: '0.5rem 0.75rem', background: '#090909', borderBottom: '1px solid var(--border)' }}>
                        <span style={{ color: '#f85149' }}>Windows 10</span>
                        <span style={{ color: '#3fb950', fontWeight: 800 }}>Windows 11 Pro/Enterprise 24H2</span>
                        <span style={{ color: 'var(--gray-300)' }}>Fin soporte W10 oct 2025</span>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.5fr', padding: '0.5rem 0.75rem', background: '#090909', borderBottom: '1px solid var(--border)' }}>
                        <span style={{ color: '#f85149' }}>CMD / Batch</span>
                        <span style={{ color: '#3fb950', fontWeight: 800 }}>PowerShell 7 + Windows Terminal</span>
                        <span style={{ color: 'var(--gray-300)' }}>Multiplataforma, canalización de objetos</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Tab 4: Materials & Downloads */}
          {activeTab === 'materials' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {resourceList.map((res, idx) => (
                <div 
                  key={res.id || idx}
                  style={{
                    padding: '1.25rem',
                    background: '#111111',
                    border: '1px solid var(--border-strong)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ padding: '0.75rem', background: '#000000', border: '1px solid var(--accent)', color: 'var(--accent)' }}>
                      <FileText size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '0.15rem', color: 'var(--white)' }}>{res.title || getLocalized(res.name)}</h4>
                      <div style={{ fontSize: '0.75rem', color: 'var(--gray-400)', fontFamily: 'var(--font-display)', textTransform: 'uppercase' }}>
                        TAMAÑO: {res.size} · FECHA: {res.date}
                      </div>
                    </div>
                  </div>

                  <button 
                    className="btn btn-secondary btn-sm"
                    onClick={() => alert(`Descargando recurso: ${res.title || getLocalized(res.name)}`)}
                  >
                    <Download size={14} />
                    <span>{lang === 'eu' ? 'DESKARGATU' : 'DESCARGAR'}</span>
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Tab 5: Evaluation Criteria */}
          {activeTab === 'evaluation' && (
            <div style={{ background: '#111111', border: '1px solid var(--border-strong)', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '1rem', color: 'var(--accent)', fontFamily: 'var(--font-display)' }}>
                {lang === 'eu' ? 'EBALUAZIO IRIZPIDE OFIZIALAK ETA PONDERAZIOAK' : 'PONDERACIÓN OFICIAL DE CALIFICACIÓN'}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {course.gradingCriteria.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.85rem 1.25rem', background: '#000000', border: '1px solid var(--border)' }}>
                    <span style={{ fontWeight: 700, color: 'var(--white)', fontSize: '0.95rem' }}>{getLocalized(item.name)}</span>
                    <span style={{ color: 'var(--accent)', fontWeight: 900, fontFamily: 'var(--font-display)', fontSize: '1.2rem' }}>{item.weight}%</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Action */}
          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-strong)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <button
              onClick={() => { onClose(); onOpenBooking(course.id); }}
              className="btn btn-primary"
              id="btn-modal-book-tutoring"
            >
              <UserCheck size={16} />
              <span>{text.bookTutoring[lang]}</span>
            </button>

            <button onClick={onClose} className="btn btn-secondary">
              {lang === 'eu' ? 'ITXI' : 'CERRAR'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
