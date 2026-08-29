import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles } from 'lucide-react';

export const GradeCalculator = ({ initialCourse }) => {
  const { lang, courses, getLocalized } = useApp();
  const [selectedCourseId, setSelectedCourseId] = useState(initialCourse ? initialCourse.id : courses[0].id);

  const activeCourse = courses.find(c => c.id === selectedCourseId) || courses[0];

  const [scores, setScores] = useState({
    0: 7.5,
    1: 8.0,
    2: 9.0,
    3: 10.0
  });

  const handleScoreChange = (index, val) => {
    const num = Math.min(10, Math.max(0, parseFloat(val) || 0));
    setScores(prev => ({ ...prev, [index]: num }));
  };

  const finalGrade = activeCourse.gradingCriteria.reduce((acc, item, idx) => {
    const score = scores[idx] !== undefined ? scores[idx] : 5.0;
    return acc + (score * (item.weight / 100));
  }, 0);

  const getGradeStatus = (grade) => {
    if (grade >= 9.0) return { label: { es: "SOBRESALIENTE (A+)", eu: "BIKAINA (A+)", en: "OUTSTANDING (A+)" }, color: "#3fb950" };
    if (grade >= 7.0) return { label: { es: "NOTABLE (B)", eu: "OSO ONDO (B)", en: "VERY GOOD (B)" }, color: "#58a6ff" };
    if (grade >= 5.0) return { label: { es: "APROBADO (C)", eu: "GAI (C)", en: "PASSED (C)" }, color: "var(--accent)" };
    return { label: { es: "SUSPENSO / A MEJORAR", eu: "EZ GAI / HOBETZEKO", en: "NEEDS IMPROVEMENT" }, color: "#f85149" };
  };

  const status = getGradeStatus(finalGrade);

  return (
    <div className="glass-panel animate-fade-in" style={{ padding: '0', maxWidth: '850px', margin: '0 auto', background: '#0d0d0d', border: '1px solid var(--border-strong)' }}>
      {/* Banner Header with GTA Artwork */}
      <div 
        style={{
          position: 'relative',
          padding: '2.5rem 2rem',
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 100%), url('/images/bg_gta_workspace.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottom: '1px solid var(--border-strong)',
          textAlign: 'center'
        }}
      >
        <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--white)', letterSpacing: '0.04em', marginBottom: '0.35rem' }}>
          {lang === 'eu' ? 'NOTEN SIMULAGAILU ETA KALKULAGAILUA' : 'SIMULADOR DE CALIFICACIONES FINALES'}
        </h2>
        <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, letterSpacing: '0.06em' }}>
          {lang === 'eu' ? 'SARTU ZURE ZEREGINEN NOTAK AMAIERAKO KALIFIKAZIOA IKUSTEKO' : 'INTRODUCE TUS NOTAS ESTIMADAS O REALES PARA CONOCER TU PROYECCIÓN'}
        </p>
      </div>

      <div style={{ padding: '2rem' }}>
        {/* Select Course */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="select-calc-course" style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--gray-300)', marginBottom: '0.4rem' }}>
            {lang === 'eu' ? 'AUKERATU IRAKASGAIA:' : 'SELECCIONA LA ASIGNATURA:'}
          </label>
          <select 
            className="input-field"
            value={selectedCourseId}
            onChange={(e) => setSelectedCourseId(e.target.value)}
            id="select-calc-course"
          >
            {courses.map(c => (
              <option key={c.id} value={c.id}>
                {c.code} - {getLocalized(c.title)}
              </option>
            ))}
          </select>
        </div>

        {/* Input Sliders */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          {activeCourse.gradingCriteria.map((item, idx) => {
            const currentScore = scores[idx] !== undefined ? scores[idx] : 5.0;
            const inputId = `score-input-${idx}`;
            const rangeId = `score-range-${idx}`;

            return (
              <div 
                key={idx} 
                style={{ 
                  background: '#111111', 
                  padding: '1.25rem', 
                  border: '1px solid var(--border-strong)' 
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <label htmlFor={inputId}>
                    <span style={{ fontWeight: 800, fontSize: '1.05rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase' }}>{getLocalized(item.name)}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--gray-300)', marginLeft: '0.5rem', fontFamily: 'var(--font-display)' }}>
                      ({item.weight}% {lang === 'eu' ? 'PISUA' : 'PESO'})
                    </span>
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input 
                      id={inputId}
                      type="number"
                      min="0"
                      max="10"
                      step="0.1"
                      className="input-field"
                      aria-label={`${getLocalized(item.name)} (${item.weight}%)`}
                      style={{ width: '80px', textAlign: 'center', padding: '0.4rem', fontWeight: 900, fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}
                      value={currentScore}
                      onChange={(e) => handleScoreChange(idx, e.target.value)}
                    />
                    <span style={{ fontWeight: 700, color: 'var(--gray-300)', fontFamily: 'var(--font-display)' }}>/ 10</span>
                  </div>
                </div>

                <input 
                  id={rangeId}
                  type="range"
                  min="0"
                  max="10"
                  step="0.1"
                  aria-label={`Deslizador para ${getLocalized(item.name)}`}
                  value={currentScore}
                  onChange={(e) => handleScoreChange(idx, e.target.value)}
                  style={{ width: '100%', accentColor: 'var(--accent)', cursor: 'pointer' }}
                />
              </div>
            );
          })}
        </div>

        {/* Result Display Box */}
        <div className="score-display" aria-live="polite" style={{ background: '#000000', border: '2px solid var(--accent)', padding: '2rem' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--gray-300)', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-display)', fontWeight: 700 }}>
            {lang === 'eu' ? 'ESTIMATUTAKO AMAIERAKO NOTA' : 'NOTA FINAL ESTIMADA'}
          </div>
          <div className="score-number" style={{ fontSize: '4.5rem', fontWeight: 900, color: 'var(--accent)' }}>
            {finalGrade.toFixed(2)}
          </div>
          <div 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              padding: '0.4rem 1.25rem', 
              border: `1px solid ${status.color}`, 
              color: status.color,
              fontWeight: 900,
              fontFamily: 'var(--font-display)',
              fontSize: '1rem',
              letterSpacing: '0.05em'
            }}
          >
            <Sparkles size={16} aria-hidden="true" />
            {status.label[lang]}
          </div>
        </div>
      </div>
    </div>
  );
};
