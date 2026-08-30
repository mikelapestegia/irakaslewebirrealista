import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles } from 'lucide-react';

export const GradeCalculator = ({ initialCourse }) => {
  const { lang, courses, getLocalized, theme } = useApp();
  const [selectedCourseId, setSelectedCourseId] = useState(initialCourse ? initialCourse.id : courses[0].id);

  const activeCourse = courses.find(c => c.id === selectedCourseId) || courses[0];

  const [scores, setScores] = useState({
    0: 7.5,
    1: 8.0,
    2: 9.0,
    3: 10.0
  });
  const [companyScore, setCompanyScore] = useState(5.0);

  const handleScoreChange = (index, val) => {
    const num = Math.min(10, Math.max(0, parseFloat(val) || 0));
    setScores(prev => ({ ...prev, [index]: num }));
  };

  const hasDualSplit = activeCourse.hasDualSplit;

  const centerGrade = activeCourse.gradingCriteria.reduce((acc, item, idx) => {
    const score = scores[idx] !== undefined ? scores[idx] : 5.0;
    return acc + (score * (item.weight / 100));
  }, 0);

  const finalGrade = hasDualSplit
    ? (centerGrade * 0.90) + (companyScore * 0.10)
    : centerGrade;

  const getGradeStatus = (grade) => {
    if (grade >= 9.0) return { label: { es: "SOBRESALIENTE (A+)", eu: "BIKAINA (A+)", en: "OUTSTANDING (A+)" }, color: "#3fb950" };
    if (grade >= 7.0) return { label: { es: "NOTABLE (B)", eu: "OSO ONDO (B)", en: "VERY GOOD (B)" }, color: "#58a6ff" };
    if (grade >= 5.0) return { label: { es: "APROBADO (C)", eu: "GAI (C)", en: "PASSED (C)" }, color: "var(--accent)" };
    return { label: { es: "SUSPENSO / A MEJORAR", eu: "EZ GAI / HOBETZEKO", en: "NEEDS IMPROVEMENT" }, color: "#f85149" };
  };

  const status = getGradeStatus(finalGrade);

  return (
    <div className="glass-panel animate-fade-in" style={{ padding: '0', maxWidth: '850px', margin: '0 auto', background: '#0d0d0d', border: '1px solid var(--border-strong)' }}>
      {/* Banner Header with Active Theme Artwork */}
      <div 
        style={{
          position: 'relative',
          padding: '2.5rem 2rem',
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 100%), url('${import.meta.env.BASE_URL}images/bg_navarra_${theme}_4.png')`,
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
          {hasDualSplit && (
            <h3 style={{ fontSize: '1.1rem', fontWeight: 900, fontFamily: 'var(--font-display)', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.2rem' }}>
              {lang === 'eu' ? 'IKASTETXEKO ARLOA (PISUA: %90)' : 'ÁMBITO CENTRO EDUCATIVO (PESO: 90%)'}
            </h3>
          )}
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

          {hasDualSplit && (
            <div style={{ borderTop: '1px solid var(--border-strong)', paddingTop: '1.5rem', marginTop: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 900, fontFamily: 'var(--font-display)', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1rem' }}>
                {lang === 'eu' ? 'ENPRESA / DUAL ESPARRUA (PISUA: %10)' : 'ÁMBITO EMPRESA / DUAL (PESO: 10%)'}
              </h3>
              <div 
                style={{ 
                  background: '#111111', 
                  padding: '1.25rem', 
                  border: '1px solid var(--border-strong)' 
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <label htmlFor="company-score-input">
                    <span style={{ fontWeight: 800, fontSize: '1.05rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase' }}>
                      {lang === 'eu' ? 'Enpresako egonaldiaren ebaluazioa (Tutor/a)' : 'Evaluación de la Estancia DUAL (Tutor/a)'}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--gray-300)', marginLeft: '0.5rem', fontFamily: 'var(--font-display)' }}>
                      (10% {lang === 'eu' ? 'PISUA' : 'PESO'})
                    </span>
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input 
                      id="company-score-input"
                      type="number"
                      min="0"
                      max="10"
                      step="0.1"
                      className="input-field"
                      aria-label="Nota Empresa DUAL"
                      style={{ width: '80px', textAlign: 'center', padding: '0.4rem', fontWeight: 900, fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}
                      value={companyScore}
                      onChange={(e) => setCompanyScore(Math.min(10, Math.max(0, parseFloat(e.target.value) || 0)))}
                    />
                    <span style={{ fontWeight: 700, color: 'var(--gray-300)', fontFamily: 'var(--font-display)' }}>/ 10</span>
                  </div>
                </div>
                <input 
                  id="company-score-range"
                  type="range"
                  min="0"
                  max="10"
                  step="0.1"
                  aria-label="Deslizador Nota Empresa DUAL"
                  value={companyScore}
                  onChange={(e) => setCompanyScore(parseFloat(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--accent)', cursor: 'pointer' }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Result Display Box */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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

          {/* LOMLOE DUAL Specific Warnings and Recovery Explanations */}
          {hasDualSplit && (
            <div 
              style={{ 
                padding: '1.5rem', 
                background: '#0a0a0a', 
                border: `1px solid ${centerGrade >= 5.0 && companyScore < 5.0 ? 'var(--amber)' : centerGrade < 5.0 ? '#f85149' : '#3fb950'}`,
                fontFamily: 'var(--font-display)',
                fontSize: '0.9rem',
                lineHeight: 1.6
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 900, marginBottom: '0.75rem', color: centerGrade >= 5.0 && companyScore < 5.0 ? 'var(--amber)' : centerGrade < 5.0 ? '#f85149' : '#3fb950', fontSize: '1rem', letterSpacing: '0.04em' }}>
                <span>📢</span>
                <span>
                  {lang === 'eu' ? 'LOM-LOE DUAL EBALUAZIO ARAUDIA (NAFARROA)' : 'NORMATIVA DE EVALUACIÓN LOMLOE DUAL (NAVARRA)'}
                </span>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', marginBottom: '1rem', fontSize: '0.85rem' }}>
                <div style={{ background: '#141414', padding: '0.6rem 0.85rem', border: '1px solid var(--border-strong)' }}>
                  <strong>{lang === 'eu' ? 'Nota Ikastetxea (%90 pisu):' : 'Nota Centro (90% peso):'}</strong> <span style={{ color: centerGrade >= 5.0 ? '#3fb950' : '#f85149', fontWeight: 900, fontSize: '1.05rem', fontFamily: 'var(--font-display)' }}>{centerGrade.toFixed(2)}</span>
                </div>
                <div style={{ background: '#141414', padding: '0.6rem 0.85rem', border: '1px solid var(--border-strong)' }}>
                  <strong>{lang === 'eu' ? 'Nota Enpresa (%10 pisu):' : 'Nota Empresa (10% peso):'}</strong> <span style={{ color: companyScore >= 5.0 ? '#3fb950' : '#f85149', fontWeight: 900, fontSize: '1.05rem', fontFamily: 'var(--font-display)' }}>{companyScore.toFixed(2)}</span>
                </div>
              </div>

              {centerGrade >= 5.0 && companyScore < 5.0 ? (
                <div style={{ color: 'var(--gray-200)' }}>
                  <p style={{ margin: '0 0 0.75rem 0' }}>
                    {lang === 'eu' ? (
                      <>
                        ⚠️ <strong>Ikastetxeko zatia gainditu duzu ({centerGrade.toFixed(2)}) baina enpresako zatia suspenditu duzu ({companyScore.toFixed(2)}).</strong> Ikaslea ez-gai da moduluan orokorrean, baina <strong>soilik enpresako ikaskuntza-emaitzak (RA) berreskuratu beharko ditu</strong>.
                      </>
                    ) : (
                      <>
                        ⚠️ <strong>Has aprobado la parte del Centro ({centerGrade.toFixed(2)}) pero has suspendido la parte de la Empresa ({companyScore.toFixed(2)}).</strong> Estás suspenso/a en el módulo global, pero <strong>solo tendrás que recuperar los RAs evaluados en la empresa</strong>.
                      </>
                    )}
                  </p>
                  <strong style={{ color: 'var(--amber)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {lang === 'eu' ? 'BERRESKURATZE BIDEAK:' : 'VÍAS DE RECUPERACIÓN LEGALES:'}
                  </strong>
                  <ul style={{ margin: '0.35rem 0 0 1.25rem', padding: '0', listStyleType: 'square', color: 'var(--gray-300)' }}>
                    <li>
                      {lang === 'eu' 
                        ? 'Recuperarlos DUAL aldian bigarren modulu-blokea amaitzean (periodo dualaren bukaeran).' 
                        : 'Recuperarlos durante el periodo DUAL al finalizar el segundo bloque de módulos que permiten acceder a ese periodo.'}
                    </li>
                    <li style={{ marginTop: '0.25rem' }}>
                      {lang === 'eu' 
                        ? 'Enpresako DUAL prestakuntza-aldia berriro egitea (gehienez 2 aukera gainditu gabe).' 
                        : 'Volver a realizar el periodo de formación DUAL en empresa y recuperarlos siempre y cuando no se hayan superado las 2 oportunidades para ello.'}
                    </li>
                  </ul>
                </div>
              ) : centerGrade < 5.0 ? (
                <p style={{ color: 'var(--gray-300)', margin: '0' }}>
                  {lang === 'eu' ? (
                    <>
                      ❌ <strong>Ikastetxeko zatia suspenditu duzu ({centerGrade.toFixed(2)}).</strong> Ez da enpresako zatia ponderatzen. Ikastetxeko RAk (Ikaskuntza Emaitzak) berreskuratu behar dituzu ohiko edo ezohiko deialdian.
                    </>
                  ) : (
                    <>
                      ❌ <strong>Has suspendido la parte del Centro ({centerGrade.toFixed(2)}).</strong> No se pondera la empresa hasta aprobar el centro. Debes recuperar los RAs del centro educativo en las pruebas ordinarias/extraordinarias.
                    </>
                  )}
                </p>
              ) : (
                <p style={{ color: 'var(--gray-300)', margin: '0' }}>
                  {lang === 'eu' ? (
                    <>
                      ✅ <strong>Módulua gaindituta!</strong> Bikain, ikastetxeko zatia ({centerGrade.toFixed(2)}) eta enpresako zatia ({companyScore.toFixed(2)}) gainditu dituzu. Ez duzu ezer berreskuratu behar.
                    </>
                  ) : (
                    <>
                      ✅ <strong>¡Módulo aprobado!</strong> Has superado tanto la parte del Centro ({centerGrade.toFixed(2)}) como la de la Empresa ({companyScore.toFixed(2)}). No requieres recuperación.
                    </>
                  )}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
