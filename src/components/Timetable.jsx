import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MapPin, Filter } from 'lucide-react';

export const Timetable = () => {
  const { lang } = useApp();
  const [filterType, setFilterType] = useState('all');

  const days = {
    es: ["Hora", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
    eu: ["Ordua", "Astelehena", "Asteartea", "Asteazkena", "Osteguna", "Ostirala"],
    en: ["Time", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
  };

  const scheduleSlots = [
    {
      time: "08:30 - 10:30",
      slots: [
        { course: "SOMO", title: "Sist. Operativos Monopuesto", room: "Aula L1", type: "class" },
        null,
        { course: "SOMO", title: "Sist. Operativos Monopuesto", room: "Aula L1", type: "class" },
        null,
        null
      ]
    },
    {
      time: "10:30 - 12:30",
      slots: [
        null,
        { course: "SIGE", title: "Gestión Empresarial (ERP)", room: "Lab 2", type: "lab" },
        null,
        { course: "SIGE", title: "Gestión Empresarial (ERP)", room: "Lab 2", type: "lab" },
        { course: "DIGITAL", title: "Digitalización Aplicada", room: "Aula Multiusos", type: "class" }
      ]
    },
    {
      time: "12:30 - 13:30",
      slots: [
        { course: "TUT", title: "Tutorías", room: "Despacho", type: "office" },
        null,
        { course: "TUT", title: "Tutorías", room: "Despacho", type: "office" },
        null,
        { course: "TUT", title: "Tutorías", room: "Despacho", type: "office" }
      ]
    }
  ];

  const headers = days[lang] || days['es'];

  return (
    <div className="glass-panel animate-fade-in" style={{ padding: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>
            {lang === 'eu' ? 'ASTEKO ORDUTEGIA' : lang === 'es' ? 'HORARIO SEMANAL' : 'WEEKLY SCHEDULE'}
          </h2>
          <p style={{ color: 'var(--gray-300)', fontSize: '0.825rem' }}>
            {lang === 'eu' ? '1. Hiruhilekoa · 2026/2027 Ikasturtea' : 'Primer trimestre · Curso 2026/2027'}
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Filter size={13} />
          </span>
          <button 
            className={`btn btn-sm ${filterType === 'all' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setFilterType('all')}
          >
            {lang === 'eu' ? 'Denak' : 'Todos'}
          </button>
          <button 
            className={`btn btn-sm ${filterType === 'class' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setFilterType('class')}
          >
            {lang === 'eu' ? 'Klaseak' : 'Clases'}
          </button>
          <button 
            className={`btn btn-sm ${filterType === 'lab' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setFilterType('lab')}
          >
            {lang === 'eu' ? 'Laborategiak' : 'Laboratorios'}
          </button>
          <button 
            className={`btn btn-sm ${filterType === 'office' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setFilterType('office')}
          >
            {lang === 'eu' ? 'Tutoretzak' : 'Tutorías'}
          </button>
        </div>
      </div>

      <div className="timetable-grid">
        {headers.map((h, i) => (
          <div key={i} className="time-slot-header">
            {h}
          </div>
        ))}

        {scheduleSlots.map((row, rIdx) => (
          <React.Fragment key={rIdx}>
            <div className="time-slot-header" style={{ alignSelf: 'center', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.7rem' }}>
              {row.time}
            </div>

            {row.slots.map((slot, cIdx) => {
              if (!slot) {
                return (
                  <div key={cIdx} className="time-slot-cell" style={{ opacity: 0.25 }}>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>—</span>
                  </div>
                );
              }

              const isMatch = filterType === 'all' || slot.type === filterType;

              return (
                <div 
                  key={cIdx} 
                  className={`time-slot-cell ${slot.type === 'class' ? 'has-class' : slot.type === 'lab' ? 'has-lab' : 'has-office'}`}
                  style={{ opacity: isMatch ? 1 : 0.2 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
                    <span className={`badge ${slot.type === 'class' ? 'badge-indigo' : slot.type === 'lab' ? 'badge-cyan' : 'badge-emerald'}`} style={{ fontSize: '0.65rem' }}>
                      {slot.course}
                    </span>
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '0.775rem', lineHeight: 1.2, marginBottom: '0.2rem' }}>
                    {slot.title}
                  </div>
                  <div style={{ fontSize: '0.675rem', color: 'var(--text-tertiary)', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    <MapPin size={11} />
                    {slot.room}
                  </div>
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
