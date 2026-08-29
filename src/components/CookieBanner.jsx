import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Cookie, Check, X, Settings, ShieldCheck } from 'lucide-react';

export const CookieBanner = ({ onOpenLegal }) => {
  const { lang } = useApp();
  const [isVisible, setIsVisible] = useState(() => {
    return !localStorage.getItem('mikel_lab_cookie_consent');
  });
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    technical: true, // Always true (required)
    analytics: false,
    personalization: false
  });

  const handleAcceptAll = () => {
    const consentData = { technical: true, analytics: true, personalization: true, timestamp: new Date().toISOString() };
    localStorage.setItem('mikel_lab_cookie_consent', JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleRejectOptional = () => {
    const consentData = { technical: true, analytics: false, personalization: false, timestamp: new Date().toISOString() };
    localStorage.setItem('mikel_lab_cookie_consent', JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleSaveCustom = () => {
    const consentData = { ...preferences, technical: true, timestamp: new Date().toISOString() };
    localStorage.setItem('mikel_lab_cookie_consent', JSON.stringify(consentData));
    setShowPreferences(false);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const text = {
    es: {
      title: "PRIVACIDAD Y COOKIES (RGPD 2026/2027) — TE VIGILAMOS POR TU BIEN",
      desc: "Tranquilo, no le venderemos tu alma a las corporaciones (todavía). Cumpliendo estrictamente el RGPD y la AEPD, usamos almacenamiento local indispensable para que la web recuerde tu idioma y tus notas sin tener que pedirle permiso a la Big Tech. Elige qué trozo de tu privacidad nos cedes hoy.",
      acceptAll: "CEDER TODO SIN PREGUNTAR",
      rejectOptional: "MODO PARANOICO (SOLO NECESARIAS)",
      configure: "NEGOCIAR REHENES",
      moreInfo: "Lee la letra pequeña en nuestra Política de Privacidad",
      prefTitle: "GESTIÓN DE PREFERENCIAS: ¿HASTA DÓNDE NOS DEJAS ENTRAR?",
      techTitle: "1. Cookies Técnicas e Inevitables (Mandatorias)",
      techDesc: "Sin esto la web no sabe ni quién eres ni en qué idioma hablas. Son tan obligatorias como aprobar los exámenes. No se pueden desactivar salvo que apagues la luz.",
      analyticsTitle: "2. Espionaje Docente y Analítica Anónima",
      analyticsDesc: "Nos permite saber anónimamente si abres los apuntes los domingos a las 3 AM o si solo entras el día antes de la entrega para entrar en pánico.",
      persTitle: "3. Galletas de Personalización y Comportamiento",
      persDesc: "Memorizan tus filtros de horario y tus notas simuladas para que no tengas que recalcular tu inminente suspenso cada vez que recargas.",
      saveBtn: "FIRMAR EL PACTO DE PRIVACIDAD"
    },
    eu: {
      tag: "PRIVATUTASUN ATARIA",
      title: "PRIVATUTASUN ETA COOKIEAK (DBEO 2026/2027) — ZURE MESEDETAN ZAINDUAK",
      desc: "Lasai, ez diogu zure arima korporazioei salduko (oraingoz). DBEO eta AEPD araudia zintzoki betez, biltegiratze lokal teknikoa erabiltzen dugu webak zure hizkuntza eta oharrak gogora ditzan Big Tech-i baimenik eskatu gabe. Aukeratu zein privatutasun zati uzten diguzun gaur.",
      acceptAll: "DENA EMATEKO PREST",
      rejectOptional: "PARANOIKO MODUA (SOILIK BEHARREZKOAK)",
      configure: "NEGOZIATU HOBESPENAK",
      moreInfo: "Irakurri letra txikia gure Pribatutasun Politikan",
      prefTitle: "HOBESPENEN KUDEAKETA: ZENBATERAINO SARTUKO GARA?",
      techTitle: "1. Cookie Teknikoak eta Ezinbestekoak (Derrigorrezkoak)",
      techDesc: "Hau gabe webak ez daki nor zaren ezta zein hizkuntzatan ari zaren. Azterketak gainditzea bezain derrigorrezkoak dira. Ezin dira desaktibatu argia itzali ezean.",
      analyticsTitle: "2. Irakasle Espiotza eta Analitika Anonimoa",
      analyticsDesc: "Modu anonimoan jakiteko aukera ematen digu igande goizaldeko 3etan apunteak irekitzen dituzun ala entregatzeko azken egunean bakarrik sartzen zaren.",
      persTitle: "3. Pertsonalizazio eta Jokabide Cookieak",
      persDesc: "Ordutegiko iragazkiak eta simulaturiko notak gogoratzen dituzte orria freskatzen duzun bakoitzean kalkulu berdinak ez egiteko.",
      saveBtn: "PRIVATUTASUN ITUNA SINATU"
    },
    en: {
      title: "PRIVACY & COOKIES (GDPR 2026/2027) — WATCHING OVER YOU",
      desc: "Don't worry, we won't sell your data to mega-corps (yet). Fully GDPR and AEPD compliant, we use essential local storage so the portal remembers your language and grades without handing your soul to Big Tech. Choose how much privacy you yield today.",
      acceptAll: "SURRENDER ALL DATA",
      rejectOptional: "PARANOID MODE (ESSENTIAL ONLY)",
      configure: "NEGOTIATE TERMS",
      moreInfo: "Read the fine print in our Privacy Policy",
      prefTitle: "MANAGE PREFERENCES: HOW FAR CAN WE GO?",
      techTitle: "1. Technical & Mandatory Cookies (Unavoidable)",
      techDesc: "Without these, the app doesn't know who you are or what language you speak. Mandatory unless you unplug your computer.",
      analyticsTitle: "2. Teaching Surveillance & Anonymous Analytics",
      analyticsDesc: "Helps us anonymously track if you read materials on Sunday at 3 AM or only panic open them 10 minutes before deadlines.",
      persTitle: "3. Personalization & Behavior Cookies",
      persDesc: "Remembers timetable filters and simulated grades so you don't have to face math reality every single reload.",
      saveBtn: "SIGN THE PRIVACY PACT"
    }
  };

  const t = text[lang] || text['es'];

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9990,
        background: '#0d0d0d',
        borderTop: '2px solid var(--accent)',
        padding: '1.25rem 1.5rem',
        boxShadow: '0 -10px 25px rgba(0, 0, 0, 0.8)'
      }}
      role="region"
      aria-label={t.title}
      id="cookie-banner-rgpd"
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {!showPreferences ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem' }}>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                <Cookie color="var(--accent)" size={20} aria-hidden="true" />
                <h3 style={{ fontSize: '1rem', fontWeight: 900, fontFamily: 'var(--font-display)', letterSpacing: '0.04em', color: 'var(--white)' }}>
                  {t.title}
                </h3>
              </div>
              <p style={{ fontSize: '0.825rem', color: 'var(--gray-300)', lineHeight: 1.5 }}>
                {t.desc}{' '}
                <button 
                  onClick={onOpenLegal} 
                  style={{ background: 'none', border: 'none', color: 'var(--accent)', textDecoration: 'underline', cursor: 'pointer', fontSize: '0.825rem', padding: 0 }}
                >
                  {t.moreInfo}
                </button>
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button 
                onClick={() => setShowPreferences(true)}
                className="btn btn-secondary btn-sm"
                id="btn-cookie-config"
                style={{ fontSize: '0.8rem' }}
              >
                <Settings size={14} aria-hidden="true" />
                <span>{t.configure}</span>
              </button>
              <button 
                onClick={handleRejectOptional}
                className="btn btn-secondary btn-sm"
                id="btn-cookie-reject"
                style={{ fontSize: '0.8rem' }}
              >
                <span>{t.rejectOptional}</span>
              </button>
              <button 
                onClick={handleAcceptAll}
                className="btn btn-primary btn-sm"
                id="btn-cookie-accept-all"
                style={{ fontSize: '0.8rem' }}
              >
                <Check size={15} aria-hidden="true" />
                <span>{t.acceptAll}</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="animate-fade-in" style={{ padding: '0.5rem 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 900, fontFamily: 'var(--font-display)', color: 'var(--accent)' }}>
                {t.prefTitle}
              </h4>
              <button onClick={() => setShowPreferences(false)} style={{ background: 'none', border: 'none', color: 'var(--gray-300)', cursor: 'pointer' }}>
                <X size={18} />
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
              {/* Technical */}
              <div style={{ background: '#141414', padding: '0.85rem', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--white)' }}>{t.techTitle}</strong>
                  <span className="badge badge-emerald" style={{ fontSize: '0.7rem' }}>SIEMPRE ACTIVA</span>
                </div>
                <p style={{ fontSize: '0.75rem', color: 'var(--gray-400)', lineHeight: 1.4 }}>{t.techDesc}</p>
              </div>

              {/* Analytics */}
              <div style={{ background: '#141414', padding: '0.85rem', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--white)' }}>{t.analyticsTitle}</strong>
                  <input 
                    type="checkbox" 
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                    style={{ accentColor: 'var(--accent)', transform: 'scale(1.2)', cursor: 'pointer' }}
                    id="checkbox-cookie-analytics"
                  />
                </div>
                <p style={{ fontSize: '0.75rem', color: 'var(--gray-400)', lineHeight: 1.4 }}>{t.analyticsDesc}</p>
              </div>

              {/* Personalization */}
              <div style={{ background: '#141414', padding: '0.85rem', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--white)' }}>{t.persTitle}</strong>
                  <input 
                    type="checkbox" 
                    checked={preferences.personalization}
                    onChange={(e) => setPreferences(prev => ({ ...prev, personalization: e.target.checked }))}
                    style={{ accentColor: 'var(--accent)', transform: 'scale(1.2)', cursor: 'pointer' }}
                    id="checkbox-cookie-personalization"
                  />
                </div>
                <p style={{ fontSize: '0.75rem', color: 'var(--gray-400)', lineHeight: 1.4 }}>{t.persDesc}</p>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <button 
                onClick={handleSaveCustom}
                className="btn btn-primary btn-sm"
                id="btn-save-cookie-prefs"
              >
                <ShieldCheck size={15} aria-hidden="true" />
                <span>{t.saveBtn}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
