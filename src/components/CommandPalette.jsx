import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { Search, BookOpen, Calendar, FolderDown, Calculator, BrainCircuit, Bell, ShieldCheck, UserCheck, ArrowRight, X } from 'lucide-react';

export const CommandPalette = ({ isOpen, onClose, onOpenBooking, onOpenLegal }) => {
  const { lang, courses, announcements, setActiveTab, setSelectedCourse } = useApp();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Build searchable items list with rich keyword indexing
  const navActions = [
    { 
      id: 'act-courses', 
      type: 'action', 
      title: { es: 'Ir a Asignaturas (SOMO, SIGE, THD)', eu: 'Irakasgaietara joan', en: 'Go to Subjects' }, 
      keywords: 'somo sige thd asignaturas modulos temarios windows linux odoo python biki digital',
      icon: BookOpen, 
      action: () => setActiveTab('courses') 
    },
    { 
      id: 'act-timetable', 
      type: 'action', 
      title: { es: 'Ver Horario Lectivo y Tutorías', eu: 'Ordutegia ikusi', en: 'View Timetable' }, 
      keywords: 'horario ordutegia clases laboratorios aula l1 lab 2 presencial',
      icon: Calendar, 
      action: () => setActiveTab('timetable') 
    },
    { 
      id: 'act-resources', 
      type: 'action', 
      title: { es: 'Biblioteca de Recursos y Apuntes (PowerShell, Linux, Odoo)', eu: 'Baliabideen Liburutegia', en: 'Resource Library' }, 
      keywords: 'recursos apuntes pdf powershell bash debian virtualbox odoo python cheatsheet',
      icon: FolderDown, 
      action: () => setActiveTab('resources') 
    },
    { 
      id: 'act-calculator', 
      type: 'action', 
      title: { es: 'Calculadora de Calificaciones por RAs', eu: 'Noten Kalkulagailua', en: 'Grade Calculator' }, 
      keywords: 'notas calificaciones promedio ra ponderacion examenes simulador supenso aprobado',
      icon: Calculator, 
      action: () => setActiveTab('calculator') 
    },
    { 
      id: 'act-quizzes', 
      type: 'action', 
      title: { es: 'Autoevaluación: Tests y Flashcards', eu: 'Autoebaluazioa: Testak', en: 'Quizzes & Flashcards' }, 
      keywords: 'test quiz flashcards autoevaluacion preguntas repaso examen windows odoo',
      icon: BrainCircuit, 
      action: () => setActiveTab('quizzes') 
    },
    { 
      id: 'act-announcements', 
      type: 'action', 
      title: { es: 'Avisos Oficiales del Departamento', eu: 'Sailaren Ohar Ofizialak', en: 'Department Notices' }, 
      keywords: 'avisos oharrak noticias novedades entregas examenes calendario',
      icon: Bell, 
      action: () => setActiveTab('announcements') 
    },
    { 
      id: 'act-booking', 
      type: 'action', 
      title: { es: 'Pedir Tutoría Presencial / Online con Mikel', eu: 'Tutoretza eskatu', en: 'Book Tutoring Session' }, 
      keywords: 'tutoria cita reserva mikel dudas consulta online meet presencial',
      icon: UserCheck, 
      action: () => onOpenBooking() 
    },
    { 
      id: 'act-legal', 
      type: 'action', 
      title: { es: 'Aviso Legal y Política RGPD / Privacidad', eu: 'Lege Oharra eta RGPD', en: 'Legal & RGPD Privacy' }, 
      keywords: 'legal rgpd privacidad cookies aepd lssi derechos arco',
      icon: ShieldCheck, 
      action: () => onOpenLegal('privacy') 
    }
  ];

  const courseItems = courses.map(c => {
    const raNames = (c.ras || []).map(r => r.name[lang] || r.name['es'] || '').join(' ');
    const descText = (c.description[lang] || c.description['es'] || '');
    return {
      id: `course-${c.id}`,
      type: 'course',
      title: { 
        es: `${c.code} — ${c.title[lang] || c.title['es']}`, 
        eu: `${c.code} — ${c.title['eu'] || c.title['es']}`, 
        en: `${c.code} — ${c.title['en'] || c.title['es']}` 
      },
      keywords: `${c.code} ${c.id} ${descText} ${raNames}`.toLowerCase(),
      icon: BookOpen,
      action: () => {
        setActiveTab('courses');
        setSelectedCourse(c);
      }
    };
  });

  const announcementItems = announcements.map(a => {
    const contentText = (a.content[lang] || a.content['es'] || '');
    return {
      id: `ann-${a.id}`,
      type: 'announcement',
      title: { 
        es: `Aviso: ${a.title[lang] || a.title['es']}`, 
        eu: `Oharra: ${a.title['eu'] || a.title['es']}`, 
        en: `Notice: ${a.title['en'] || a.title['es']}` 
      },
      keywords: `${a.title['es']} ${contentText}`.toLowerCase(),
      icon: Bell,
      action: () => setActiveTab('announcements')
    };
  });

  const allItems = [...navActions, ...courseItems, ...announcementItems];

  const filteredItems = allItems.filter(item => {
    const titleText = (item.title[lang] || item.title['es'] || '').toLowerCase();
    const keywordsText = (item.keywords || '').toLowerCase();
    const q = query.toLowerCase();
    return titleText.includes(q) || keywordsText.includes(q);
  });

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
        onClose();
      }
    }
  };

  const labels = {
    placeholder: { es: "Escribe un comando o busca (ej. PowerShell, SOMO, Odoo, Tutoría)...", eu: "Idatzi komando bat edo bilatu...", en: "Type a command or search..." },
    noResults: { es: "No se encontraron resultados para la búsqueda", eu: "Ez da emaitzarik aurkitu", en: "No results found" },
    footerTip: { es: "Navega con ⬆ ⬇ y pulsa ENTER para seleccionar. ESC para cerrar.", eu: "Erabili ⬆ ⬇ eta sakatu ENTER hautatzeko. ESC ixteko.", en: "Navigate with ⬆ ⬇ and press ENTER to select. ESC to close." }
  };

  return (
    <div 
      className="modal-backdrop animate-fade-in" 
      onClick={onClose} 
      role="dialog" 
      aria-modal="true"
      style={{ backdropFilter: 'blur(8px)', zIndex: 9999, alignItems: 'flex-start', paddingTop: '10vh' }}
    >
      <div 
        className="modal-content" 
        onClick={e => e.stopPropagation()} 
        onKeyDown={handleKeyDown}
        style={{ 
          maxWidth: '680px', 
          width: '90%', 
          padding: 0, 
          overflow: 'hidden', 
          borderRadius: 0,
          border: '2px solid var(--accent)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.85)'
        }}
      >
        {/* Search Header */}
        <div style={{ display: 'flex', alignItems: 'center', padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-strong)', background: '#0a0a0a' }}>
          <Search size={20} color="var(--accent)" style={{ marginRight: '0.75rem', flexShrink: 0 }} />
          <input
            ref={inputRef}
            type="text"
            className="input-field"
            placeholder={labels.placeholder[lang] || labels.placeholder['es']}
            value={query}
            onChange={e => { setQuery(e.target.value); setSelectedIndex(0); }}
            style={{ 
              border: 'none', 
              background: 'transparent', 
              color: 'var(--white)', 
              fontSize: '1.1rem', 
              fontFamily: 'var(--font-body)',
              padding: 0 
            }}
          />
          <button 
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', color: 'var(--gray-400)', cursor: 'pointer', padding: '0.25rem' }}
            aria-label="Cerrar búsqueda"
          >
            <X size={20} />
          </button>
        </div>

        {/* Results List */}
        <div style={{ maxHeight: '380px', overflowY: 'auto', background: '#111111', padding: '0.5rem 0' }}>
          {filteredItems.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--gray-400)', fontSize: '0.9rem' }}>
              {labels.noResults[lang] || labels.noResults['es']}
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => { item.action(); onClose(); }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'space-between',
                    padding: '0.75rem 1.25rem',
                    cursor: 'pointer',
                    background: isSelected ? 'var(--accent)' : 'transparent',
                    color: isSelected ? '#000000' : 'var(--white)',
                    transition: 'background 0.1s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <Icon size={18} color={isSelected ? '#000000' : 'var(--accent)'} />
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', letterSpacing: '0.04em' }}>
                      {item.title[lang] || item.title['es']}
                    </span>
                  </div>
                  <ArrowRight size={16} color={isSelected ? '#000000' : 'var(--gray-400)'} />
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div style={{ padding: '0.65rem 1.25rem', background: '#0a0a0a', borderTop: '1px solid var(--border-strong)', fontSize: '0.75rem', color: 'var(--gray-400)', textAlign: 'right' }}>
          {labels.footerTip[lang] || labels.footerTip['es']}
        </div>
      </div>
    </div>
  );
};
