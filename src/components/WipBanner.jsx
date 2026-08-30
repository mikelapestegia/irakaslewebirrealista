import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { AlertTriangle, X, ShieldCheck } from 'lucide-react';

export const WipBanner = ({ onOpenLegal }) => {
  const { lang } = useApp();
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const content = {
    es: {
      tag: "WORK IN PROGRESS · BETA 2026/2027",
      text: "Portal docente en fase de desarrollo activo. Plataforma en pruebas · Curso 2026/2027.",
      btnLegal: "Aviso Legal y Privacidad",
      close: "Cerrar aviso"
    },
    eu: {
      tag: "GARAPEN FASEAN · BETA 2026/2027",
      text: "Atari irakaslea garapen aktiboko fasean. Proba-fasean · 2026/2027 ikasturtea.",
      btnLegal: "Lege Oharra eta Pribatutasuna",
      close: "Itxi oharra"
    },
    en: {
      tag: "WORK IN PROGRESS · BETA 2026/2027",
      text: "Teaching portal under active development. Currently in testing · Academic year 2026/2027.",
      btnLegal: "Legal & Privacy Notice",
      close: "Close banner"
    }
  };

  const t = content[lang] || content['es'];

  return (
    <div 
      style={{
        background: 'linear-gradient(90deg, #111111 0%, #1a1600 50%, #111111 100%)',
        borderBottom: '2px solid var(--accent)',
        color: '#ffffff',
        padding: '0.6rem 1rem',
        fontSize: '0.825rem',
        position: 'relative',
        zIndex: 1000,
        boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
      }}
      role="region"
      aria-label="Aviso de desarrollo activo"
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flex: 1, minWidth: '280px' }}>
          <AlertTriangle size={18} color="var(--accent)" style={{ flexShrink: 0 }} aria-hidden="true" />
          <div>
            <span style={{ 
              background: 'var(--accent)', 
              color: '#000000', 
              fontWeight: 900, 
              padding: '0.15rem 0.45rem', 
              fontSize: '0.68rem', 
              fontFamily: 'var(--font-display)', 
              letterSpacing: '0.06em', 
              marginRight: '0.6rem',
              display: 'inline-block'
            }}>
              {t.tag}
            </span>
            <span style={{ color: 'var(--gray-200)', fontWeight: 500 }}>
              {t.text}
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button 
            onClick={onOpenLegal}
            style={{
              background: 'transparent',
              border: '1px solid var(--border-strong)',
              color: 'var(--accent)',
              padding: '0.25rem 0.6rem',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              transition: 'all 0.15s ease'
            }}
            id="btn-wip-legal"
          >
            <ShieldCheck size={14} aria-hidden="true" />
            <span>{t.btnLegal}</span>
          </button>

          <button
            onClick={() => setDismissed(true)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--gray-300)',
              cursor: 'pointer',
              padding: '0.2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label={t.close}
            id="btn-close-wip-banner"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
