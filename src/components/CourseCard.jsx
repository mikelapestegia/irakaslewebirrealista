import React from 'react';
import { useApp } from '../context/AppContext';
import { Code2, Brain, Cpu, Clock, Calendar, ChevronRight, Calculator } from 'lucide-react';

export const CourseCard = ({ course, onOpenDetail, onOpenCalc }) => {
  const { lang, getLocalized } = useApp();

  const iconMap = { Code2, Brain, Cpu };
  const IconComponent = iconMap[course.icon] || Code2;

  const labels = {
    viewDetails: { es: "VER TEMARIO", eu: "GAI-ZERRENDA IKUSI", en: "VIEW SYLLABUS" },
    examLabel: { es: "EXAMEN:", eu: "AZTERKETA:", en: "EXAM:" },
    progress: { es: "PROGRESO", eu: "AURRERAPENA", en: "PROGRESS" }
  };

  const completedModules = course.modules.filter(m => m.completed).length;
  const progressPct = Math.round((completedModules / course.modules.length) * 100);

  return (
    <div className="glass-card animate-fade-in" id={`course-card-${course.id}`} style={{ border: '1px solid var(--border-strong)', background: '#111111' }}>
      {/* Cover image */}
      {course.image && (
        <div style={{ position: 'relative', width: '100%', height: '180px', overflow: 'hidden' }}>
          <img 
            src={course.image} 
            alt={getLocalized(course.title)}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.9) contrast(1.1)' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, transparent 20%, #111111 100%)'
          }} />
          <div style={{ position: 'absolute', top: '0.85rem', left: '0.85rem' }}>
            <span className="badge badge-amber" style={{ background: '#000000', border: '1px solid var(--accent)', color: 'var(--accent)', padding: '0.3rem 0.6rem', fontSize: '0.75rem' }}>
              {course.code}
            </span>
          </div>
        </div>
      )}

      <div style={{ padding: '1.5rem' }}>
        {!course.image && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div className="course-icon-wrapper">
              <IconComponent size={22} />
            </div>
            <span className="badge badge-amber" style={{ fontSize: '0.75rem' }}>{course.code}</span>
          </div>
        )}

        <h3 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '0.4rem', letterSpacing: '0.03em', lineHeight: 1.15 }}>
          {getLocalized(course.title)}
        </h3>
        
        <p style={{ color: 'var(--gray-300)', fontSize: '0.85rem', marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: 1.5 }}>
          {getLocalized(course.description)}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--gray-400)', marginBottom: '1rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          <Clock size={14} color="var(--accent)" />
          <span>{getLocalized(course.schedule)}</span>
        </div>

        {/* Progress */}
        <div style={{ marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--gray-300)', marginBottom: '0.25rem' }}>
            <span>{labels.progress[lang]}</span>
            <span style={{ fontWeight: 700, color: 'var(--accent)' }}>{completedModules} / {course.modules.length} ({progressPct}%)</span>
          </div>
          <div 
            className="progress-bar-bg"
            role="progressbar"
            aria-valuenow={progressPct}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label={`${labels.progress[lang]} ${getLocalized(course.title)}`}
          >
            <div className="progress-bar-fill" style={{ width: `${progressPct}%` }}></div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
          <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--gray-400)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Calendar size={13} color="var(--accent)" aria-hidden="true" />
            <span>{labels.examLabel[lang]} <strong style={{ color: 'var(--white)' }}>{course.examDate}</strong></span>
          </div>

          <div style={{ display: 'flex', gap: '0.4rem' }}>
            <button 
              onClick={() => onOpenCalc(course)} 
              className="btn btn-secondary btn-sm"
              id={`btn-calc-${course.id}`}
              aria-label={`Calculadora de notas para ${getLocalized(course.title)}`}
              title="Calculadora"
              style={{ padding: '0.45rem 0.6rem' }}
            >
              <Calculator size={14} aria-hidden="true" />
            </button>
            <button 
              onClick={() => onOpenDetail(course)} 
              className="btn btn-primary btn-sm"
              id={`btn-detail-${course.id}`}
            >
              <span>{labels.viewDetails[lang]}</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
