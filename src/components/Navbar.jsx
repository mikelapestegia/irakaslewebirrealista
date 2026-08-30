import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  BookOpen,
  Calendar, 
  FolderDown, 
  Calculator, 
  BrainCircuit, 
  Bell, 
  UserCheck,
  Search,
  Gamepad2
} from 'lucide-react';

export const Navbar = ({ onOpenBooking, onOpenSearch }) => {
  const { lang, setLang, activeTab, setActiveTab, theme, toggleTheme } = useApp();

  const labels = {
    courses: { es: "ASIGNATURAS", eu: "IRAKASGAIAK", en: "SUBJECTS" },
    timetable: { es: "HORARIO", eu: "ORDUTEGIA", en: "TIMETABLE" },
    resources: { es: "RECURSOS", eu: "BALIABIDEAK", en: "RESOURCES" },
    calculator: { es: "NOTAS", eu: "NOTAK", en: "GRADES" },
    quizzes: { es: "AUTOEVALUACIÓN", eu: "AUTOEBALUAZIOA", en: "QUIZZES" },
    announcements: { es: "AVISOS", eu: "OHARRAK", en: "NOTICES" },
    bookOffice: { es: "PEDIR TUTORÍA", eu: "TUTORETZA ESKATU", en: "BOOK TUTORING" }
  };

  const navItems = [
    { id: 'courses', icon: BookOpen, label: labels.courses[lang] },
    { id: 'timetable', icon: Calendar, label: labels.timetable[lang] },
    { id: 'resources', icon: FolderDown, label: labels.resources[lang] },
    { id: 'calculator', icon: Calculator, label: labels.calculator[lang] },
    { id: 'quizzes', icon: BrainCircuit, label: labels.quizzes[lang] },
    { id: 'announcements', icon: Bell, label: labels.announcements[lang] }
  ];

  return (
    <header className="navbar">
      <div className="navbar-content">
        <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('courses'); }} className="brand-logo">
          <div className="brand-icon">
            ML
          </div>
          <span>MIKEL <span className="text-accent">LABORATEGI</span></span>
        </a>

        <nav className="tab-list" role="tablist" aria-label="Navegación principal" style={{ borderBottom: 'none', height: '100%', alignItems: 'center' }}>
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`tab-btn ${isActive ? 'active' : ''}`}
                id={`nav-${item.id}`}
                role="tab"
                aria-selected={isActive}
                style={{ height: '64px' }}
              >
                <Icon size={16} aria-hidden="true" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="nav-controls">
          <button 
            onClick={onOpenSearch}
            className="btn btn-secondary btn-icon"
            aria-label="Buscar en la plataforma (Ctrl+K)"
            title="Buscar (Ctrl + K)"
            id="btn-search-header"
            style={{ padding: '0.4rem 0.65rem', display: 'flex', alignItems: 'center', gap: '0.35rem', background: '#111111', border: '1px solid var(--border-strong)' }}
          >
            <Search size={15} color="var(--accent)" aria-hidden="true" />
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--gray-300)' }}>Ctrl+K</span>
          </button>

          <button 
            onClick={onOpenBooking}
            className="btn btn-primary btn-sm"
            id="btn-book-tutoring-header"
          >
            <UserCheck size={15} aria-hidden="true" />
            <span>{labels.bookOffice[lang]}</span>
          </button>

          <button 
            onClick={toggleTheme}
            className="btn btn-secondary btn-icon"
            style={{ 
              padding: '0.4rem 0.65rem', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              gap: '0.35rem', 
              background: '#111111', 
              border: '1px solid var(--border-strong)',
              height: '38px',
              minWidth: '95px',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '0.8rem',
              color: 'var(--accent)'
            }}
            title={lang === 'eu' ? 'Aldatu estetika (GTA / Sims / Minecraft / Fortnite)' : 'Cambiar estética (GTA / Sims / Minecraft / Fortnite)'}
            aria-label="Cambiar tema de juego"
            id="btn-theme-cycle"
          >
            <Gamepad2 size={16} aria-hidden="true" />
            <span style={{ color: 'var(--white)' }}>{theme === 'gta' ? 'GTA V' : theme === 'sims' ? 'SIMS' : theme === 'minecraft' ? 'MCRAFT' : 'FNITE'}</span>
          </button>

          <div className="lang-selector" role="group" aria-label="Selección de idioma / Hizkuntza aukeraketa">
            {['eu', 'es', 'en'].map(code => (
              <button 
                key={code}
                className={`lang-btn ${lang === code ? 'active' : ''}`}
                onClick={() => setLang(code)}
                aria-label={`Cambiar idioma a ${code === 'eu' ? 'Euskara' : code === 'es' ? 'Español' : 'English'}`}
                aria-pressed={lang === code}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
