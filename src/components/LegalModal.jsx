import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { X, Shield, Lock, FileText, Cookie, Check } from 'lucide-react';

export const LegalModal = ({ initialTab = 'terms', onClose }) => {
  const { lang } = useApp();
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const titles = {
    terms: { es: "AVISO LEGAL Y TÉRMINOS DE SERVICIO", eu: "LEGE OHARRA ETA ZERBITZU BALDINTZAK", en: "LEGAL NOTICE & TERMS OF SERVICE" },
    privacy: { es: "POLÍTICA DE PRIVACIDAD (RGPD)", eu: "PRIBATUTASUN POLITIKA (DBEO/RGPD)", en: "PRIVACY POLICY (GDPR)" },
    cookies: { es: "POLÍTICA DE COOKIES Y LOCAL STORAGE", eu: "COOKIE ETA LOCAL STORAGE POLITIKA", en: "COOKIE & LOCAL STORAGE POLICY" }
  };

  return (
    <div 
      className="modal-backdrop" 
      onClick={onClose} 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="legal-modal-title"
    >
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()} 
        style={{ maxWidth: '850px', width: '95%', padding: '2rem' }}
        id="legal-modal-content"
      >
        <button 
          className="modal-close-btn" 
          onClick={onClose} 
          id="btn-close-legal-modal"
          aria-label={lang === 'eu' ? 'Itxi' : 'Cerrar'}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.5rem', borderBottom: '2px solid var(--accent)', paddingBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
            <Shield color="var(--accent)" size={24} aria-hidden="true" />
            <h2 id="legal-modal-title" style={{ fontSize: '1.6rem', fontWeight: 900, fontFamily: 'var(--font-display)', letterSpacing: '0.04em', color: 'var(--white)' }}>
              {titles[activeTab][lang] || titles[activeTab]['es']}
            </h2>
          </div>
          <p style={{ color: 'var(--gray-300)', fontSize: '0.85rem' }}>
            {lang === 'eu' ? 'CI Politécnico Estella · Lizarra LHI Informatika Sailaren legezko ataria (2026/2027 ikasturtea)' : 'Portal de cumplimiento legal del Departamento de Informática del CI Politécnico Estella (Curso 2026/2027)'}
          </p>
        </div>

        {/* Tabs */}
        <div className="tab-list" role="tablist" style={{ marginBottom: '1.5rem' }}>
          <button 
            className={`tab-btn ${activeTab === 'terms' ? 'active' : ''}`}
            onClick={() => setActiveTab('terms')}
            role="tab"
            aria-selected={activeTab === 'terms'}
          >
            <FileText size={15} aria-hidden="true" />
            <span>{lang === 'eu' ? 'LEGE OHARRA' : 'AVISO LEGAL'}</span>
          </button>
          <button 
            className={`tab-btn ${activeTab === 'privacy' ? 'active' : ''}`}
            onClick={() => setActiveTab('privacy')}
            role="tab"
            aria-selected={activeTab === 'privacy'}
          >
            <Lock size={15} aria-hidden="true" />
            <span>{lang === 'eu' ? 'PRIBATUTASUNA (RGPD)' : 'PRIVACIDAD (RGPD)'}</span>
          </button>
          <button 
            className={`tab-btn ${activeTab === 'cookies' ? 'active' : ''}`}
            onClick={() => setActiveTab('cookies')}
            role="tab"
            aria-selected={activeTab === 'cookies'}
          >
            <Cookie size={15} aria-hidden="true" />
            <span>{lang === 'eu' ? 'COOKIES' : 'COOKIES'}</span>
          </button>
        </div>

        {/* Content Body */}
        <div style={{ maxHeight: '420px', overflowY: 'auto', paddingRight: '0.5rem', lineHeight: 1.6, fontSize: '0.875rem', color: 'var(--gray-200)' }}>
          {activeTab === 'terms' && (
            <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3 style={{ color: 'var(--white)', fontSize: '1.1rem', fontWeight: 800 }}>1. Datos Identificativos (LSSI-CE Ley 34/2002)</h3>
              <p>
                En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa que la presente plataforma web es propiedad del <strong>Departamento de Informática del CI Politécnico Estella / Lizarra LHI</strong> (Gobierno de Navarra), con sede en Estella-Lizarra.
              </p>
              
              <h3 style={{ color: 'var(--white)', fontSize: '1.1rem', fontWeight: 800 }}>2. Finalidad Exclusivamente Educativa y Pedagógica</h3>
              <p>
                El sitio web <em>Mikel Laborategi</em> tiene como único propósito servir de soporte didáctico para las asignaturas de <strong>Sistemas Operativos Monopuesto (SOMO)</strong>, <strong>Sistemas de Gestión Empresarial (SIGE)</strong> y <strong>Digitalización Aplicada (THD)</strong> durante el curso escolar 2026/2027.
              </p>

              <h3 style={{ color: 'var(--white)', fontSize: '1.1rem', fontWeight: 800 }}>3. Propiedad Intelectual de Materiales Docentes</h3>
              <p>
                Todos los contenidos didácticos, temarios, guías prácticas, cuestionarios y programaciones presentadas pertenecen al Departamento de Informática o cuentan con licencias de uso educativo libre (Creative Commons / FOSS). Queda prohibida la comercialización no autorizada de dichos contenidos.
              </p>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3 style={{ color: 'var(--white)', fontSize: '1.1rem', fontWeight: 800 }}>1. Responsable del Tratamiento de Datos (RGPD UE 2016/679)</h3>
              <p>
                El responsable del tratamiento de los datos recabados a través de las solicitudes de reserva de tutorías es el <strong>CI Politécnico Estella / Lizarra LHI (Departamento de Educación del Gobierno de Navarra)</strong>.
              </p>

              <h3 style={{ color: 'var(--white)', fontSize: '1.1rem', fontWeight: 800 }}>2. Finalidad y Base Jurídica</h3>
              <p>
                Los datos solicitados (nombre del alumno/a, correo institucional <code>@educacion.navarra.es</code> y motivo de consulta) se utilizan <strong>única y exclusivamente</strong> para la concertación y gestión de citas de tutoría docente. La base legítima es el ejercicio de funciones públicas docentes (misión de interés público).
              </p>

              <h3 style={{ color: 'var(--white)', fontSize: '1.1rem', fontWeight: 800 }}>3. Ejercicio de Derechos ARCO-POL</h3>
              <p>
                El alumnado puede ejercer en cualquier momento sus derechos de acceso, rectificación, supresión, oposición y limitación del tratamiento dirigiendo una comunicación oficial a la secretaría del centro o al Delegado de Protección de Datos de Educación de Navarra (<code>dpd@educacion.navarra.es</code>).
              </p>
            </div>
          )}

          {activeTab === 'cookies' && (
            <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3 style={{ color: 'var(--white)', fontSize: '1.1rem', fontWeight: 800 }}>1. Uso Exclusivo de Almacenamiento Local (No Tracking)</h3>
              <p>
                Esta plataforma <strong>no utiliza cookies de rastreo publicitario ni redes de terceros</strong>. Empleamos la tecnología <code>localStorage</code> del navegador con el fin único de recordar:
              </p>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li>Preferencia de idioma seleccionado (Euskara, Español, Inglés).</li>
                <li>Preferencia de tema visual (Modo Oscuro / Modo Claro).</li>
                <li>Progreso guardado en cuestionarios y reservas temporales de tutoría.</li>
              </ul>

              <h3 style={{ color: 'var(--white)', fontSize: '1.1rem', fontWeight: 800 }}>2. Configuración y Borrado en Navegador</h3>
              <p>
                El usuario puede eliminar o bloquear estas entradas en cualquier momento a través del menú de ajustes de su navegador web (Opciones de Privacidad &gt; Almacenamiento web).
              </p>
            </div>
          )}
        </div>

        <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border)', textAlign: 'right' }}>
          <button onClick={onClose} className="btn btn-primary btn-sm" id="btn-close-legal-footer">
            <Check size={16} aria-hidden="true" />
            <span>{lang === 'eu' ? 'ULERTUTA ETA ITXI' : 'ENTENDIDO Y CERRAR'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
