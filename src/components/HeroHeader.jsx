import React from 'react';
import { useApp } from '../context/AppContext';
import { BookOpen, Users, Clock, Calendar, MapPin, Mail } from 'lucide-react';

export const HeroHeader = ({ onOpenBooking }) => {
  const { lang, bookings } = useApp();

  const text = {
    title: {
      es: "MIKEL — PORTAL DOCENTE CI ESTELLA",
      eu: "MIKEL — LIZARRA LHI IRAKASLE PORTALA",
      en: "MIKEL — CI ESTELLA FACULTY PORTAL"
    },
    subtitle: {
      es: "DEPARTAMENTO DE INFORMÁTICA",
      eu: "INFORMATIKA SAILA",
      en: "DEPARTMENT OF INFORMATICS"
    },
    location: {
      es: "Aula L1 / Lab 2 · CI Politécnico Estella (Navarra)",
      eu: "L1 Gela / 2. Lab · Lizarra LHI Politeknikoa (Nafarroa)",
      en: "Lab L1 / Room 2 · CI Estella Polytechnic (Navarra)"
    },
    statSubjects: { es: "MÓDULOS", eu: "MODULUAK", en: "MODULES" },
    statStudents: { es: "ALUMNADO", eu: "IKASLEAK", en: "STUDENTS" },
    statHours: { es: "HORAS / SEM.", eu: "ORDUAK / AST.", en: "HRS / WK" },
    statBookings: { es: "TUTORÍAS", eu: "TUTORETZAK", en: "OFFICE HRS" },
    trimestre: { es: "1ER TRIMESTRE 2026–2027", eu: "1. HIRUHILEKOA 2026–2027", en: "TERM 1 · 2026–2027" }
  };

  const stats = [
    { icon: BookOpen, value: '3', label: text.statSubjects[lang] },
    { icon: Users, value: '142', label: text.statStudents[lang] },
    { icon: Clock, value: '12H', label: text.statHours[lang] },
    { icon: Calendar, value: bookings.length, label: text.statBookings[lang] }
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
              {text.title[lang]}
            </h1>
            <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
              {text.subtitle[lang]}
            </p>
            
            <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.85rem', color: 'var(--gray-200)', flexWrap: 'wrap' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <MapPin size={14} color="var(--accent)" />
                {text.location[lang]}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Mail size={14} color="var(--accent)" />
                mapestesar@educacion.navarra.es
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
