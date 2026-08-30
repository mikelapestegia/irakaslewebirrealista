import React from 'react';
import { useApp } from '../context/AppContext';
import { BookOpen, Users, MapPin, Building2, GraduationCap } from 'lucide-react';

export const HeroHeader = ({ onOpenBooking }) => {
  const { lang } = useApp();

  const dailyQuotes = [
    {
      es: "Mundo 1-1: Cada mañana es un respawn para hacerlo mejor 🎮",
      eu: "1-1 Mundua: Goiz bakoitza hobeto egiteko berpizte bat da 🎮",
      en: "World 1-1: Every morning is a respawn to do it better 🎮"
    },
    {
      es: "Lo que haces hoy define tus stats del mañana. ¡Sube de nivel! ⚡",
      eu: "Gaur egiten duzunak zehazten ditu biharko stats-ak. Igo maila! ⚡",
      en: "What you do today defines your tomorrow's stats. Level up! ⚡"
    },
    {
      es: "No hay atajos (cheats) para llegar a ser un gran profesional 💻",
      eu: "Ez dago bide laburrik (cheats) profesional handi bat izateko 💻",
      en: "There are no cheats to become a great professional 💻"
    },
    {
      es: "La partida merece la pena, no te rindas",
      eu: "Partidak merezi du, ez etsi",
      en: "The game is worth it, don't give up"
    },
    {
      es: "El único bug insalvable es el de no intentarlo 👾",
      eu: "Gainditu ezin den bug bakarra ez saiatzea da 👾",
      en: "The only unfixable bug is not trying 👾"
    },
    {
      es: "Un día sin aprender es como jugar sin guardar partida 💾",
      eu: "Ikasi gabeko egun bat partida gorde gabe jolastea bezalakoa da 💾",
      en: "A day without learning is like playing without saving 💾"
    },
    {
      es: "El éxito requiere farmear esfuerzo cada día. ¡A por la XP! ⚔️",
      eu: "Arrakastak egunero ahalegina farmeatzea eskatzen du. XParen bila! ⚔️",
      en: "Success requires farming effort every day. Go get that XP! ⚔️"
    },
    {
      es: "El mañana pertenece a los que hoy compilan sus sueños 🚀",
      eu: "Biharra, gaur euren ametsak konpilatzen dituztenena da 🚀",
      en: "Tomorrow belongs to those who compile their dreams today 🚀"
    },
    {
      es: "Encuentra tu party: en la informática y en la vida, el coop es la clave 🤝",
      eu: "Aurkitu zure taldea: informatikan eta bizitzan, kooperatiboa da gakoa 🤝",
      en: "Find your party: in IT and in life, co-op is key 🤝"
    },
    {
      es: "No es la dificultad del nivel, es la persistencia del jugador 🏆",
      eu: "Ez da mailaren zailtasuna, jokalariaren iraupena baizik 🏆",
      en: "It is not the difficulty of the level, it is the player's persistence 🏆"
    }
  ];

  const getQuoteIndex = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return (day + month * 31 + year) % dailyQuotes.length;
  };

  const activeQuote = dailyQuotes[getQuoteIndex()];

  const text = {
    subtitle: {
      es: "MIKEL LABORATEGI — CURSO 2026-2027",
      eu: "MIKEL LABORATEGIA — 2026-2027 IKASTURTEA",
      en: "MIKEL LAB — ACADEMIC YEAR 2026-2027"
    },
    location: {
      es: "Curso 2026-2027",
      eu: "2026-2027 Ikasturtea",
      en: "Academic Year 2026-2027"
    },
    statSubjects: { es: "MÓDULOS", eu: "MODULUAK", en: "MODULES" },
    statStudents: { es: "ALUMNADO", eu: "IKASLEAK", en: "STUDENTS" },
    statHours: { es: "EMPRESAS", eu: "ENPRESAK", en: "COMPANIES" },
    statBookings: { es: "PROFESORES", eu: "IRAKASLEAK", en: "TEACHERS" },
    trimestre: { es: "1ER TRIMESTRE 2026–2027", eu: "1. HIRUHILEKOA 2026–2027", en: "TERM 1 · 2026–2027" }
  };

  const stats = [
    { icon: BookOpen, value: '3', label: text.statSubjects[lang] },
    { icon: Users, value: '142', label: text.statStudents[lang] },
    { icon: Building2, value: '8', label: text.statHours[lang] },
    { icon: GraduationCap, value: '1', label: text.statBookings[lang] }
  ];

  return (
    <div 
      className="hero-banner animate-fade-in"
      style={{ backgroundImage: `url(/images/hero.png)` }}
    >
      <div className="hero-grid">
        <div className="teacher-info">
          <div className="avatar-container">
            <div className="teacher-avatar">
              M
            </div>
            <span className="status-indicator" title="Disponible / Online"></span>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span className="badge badge-amber">{text.trimestre[lang]}</span>
              <span className="badge badge-emerald">{lang === 'eu' ? 'TUTORETZAK ZABALIK' : 'TUTORÍAS DISPONIBLES'}</span>
            </div>

            <h1 style={{ fontSize: '2.2rem', fontWeight: 900, marginBottom: '0.2rem', letterSpacing: '0.04em', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
              {activeQuote[lang]}
            </h1>
            <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
              {text.subtitle[lang]}
            </p>
            
            <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.85rem', color: 'var(--gray-200)', flexWrap: 'wrap' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <MapPin size={14} color="var(--accent)" />
                {text.location[lang]}
              </span>
            </div>
          </div>
        </div>


        <div className="quick-stats">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div className="stat-pill" key={i}>
                <div className="stat-icon">
                  <Icon size={22} />
                </div>
                <div>
                  <div className="stat-val">{s.value}</div>
                  <div className="stat-lbl">{s.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
