import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  BookOpen,
  Calendar, 
  FolderDown, 
  Calculator, 
  BrainCircuit, 
  Bell, 
  UserCheck
} from 'lucide-react';

export const Navbar = ({ onOpenBooking }) => {
  const { lang, setLang, activeTab, setActiveTab } = useApp();

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
            onClick={onOpenBooking}
            className="btn btn-primary btn-sm"
            id="btn-book-tutoring-header"
          >
            <UserCheck size={15} aria-hidden="true" />
            <span>{labels.bookOffice[lang]}</span>
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
