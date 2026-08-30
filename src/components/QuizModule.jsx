import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { RotateCw, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

export const QuizModule = () => {
  const { lang, courses, quizzes, getLocalized, theme } = useApp();
  const [selectedCourseId, setSelectedCourseId] = useState('somo');
  const [mode, setMode] = useState('mcq');

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const [flashcardIdx, setFlashcardIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const courseQuizzes = quizzes[selectedCourseId] || quizzes['somo'] || Object.values(quizzes)[0];
  const mcqQuestions = courseQuizzes?.multipleChoice || [];
  const flashcards = courseQuizzes?.flashcards || [];

  const handleSelectOption = (idx, isCorrect) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    setShowExplanation(true);
    if (isCorrect) setScore(prev => prev + 1);
  };

  const handleNextMCQ = () => {
    setSelectedOption(null);
    setShowExplanation(false);
    setCurrentQuestionIdx(prev => Math.min(mcqQuestions.length - 1, prev + 1));
  };

  const handleResetMCQ = () => {
    setSelectedOption(null);
    setShowExplanation(false);
    setCurrentQuestionIdx(0);
    setScore(0);
  };

  const currentMcq = mcqQuestions[currentQuestionIdx];
  const currentFlashcard = flashcards[flashcardIdx];

  return (
    <div className="glass-panel animate-fade-in" style={{ padding: '0', maxWidth: '850px', margin: '0 auto', background: '#0d0d0d', border: '1px solid var(--border-strong)' }}>
      {/* Banner Header with Active Theme Artwork */}
      <div 
        style={{
          position: 'relative',
          padding: '2.5rem 2rem',
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 100%), url('${import.meta.env.BASE_URL}images/bg_navarra_${theme}_2.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottom: '1px solid var(--border-strong)',
          textAlign: 'center'
        }}
      >
        <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--white)', letterSpacing: '0.04em', marginBottom: '0.35rem' }}>
          {lang === 'eu' ? 'AUTOEBALUAZIO ETA REPASO MODULUA' : 'MÓDULO DE AUTOEVALUACIÓN & FLASHCARDS'}
        </h2>
        <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, letterSpacing: '0.06em' }}>
          {lang === 'eu' ? 'PRESTATU AZTERKETAK KONTZEPTU GAKOAK LANDUZ' : 'PONTE A PRUEBA CON CUESTIONARIOS INTERACTIVOS Y TARJETAS DE REPASO'}
        </p>
      </div>

      <div style={{ padding: '2rem' }}>
        {/* Select Course & Mode */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.75rem' }}>
          <div>
            <label htmlFor="select-quiz-course" style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--gray-300)', marginBottom: '0.4rem' }}>
              {lang === 'eu' ? 'IRAKASGAIA:' : 'ASIGNATURA:'}
            </label>
            <select 
              className="input-field"
              value={selectedCourseId}
              onChange={(e) => {
                setSelectedCourseId(e.target.value);
                handleResetMCQ();
                setFlashcardIdx(0);
                setIsFlipped(false);
              }}
              id="select-quiz-course"
            >
              {courses.map(c => (
                <option key={c.id} value={c.id}>
                  {c.code} - {getLocalized(c.title)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--gray-300)', marginBottom: '0.4rem' }}>
              {lang === 'eu' ? 'ARIKETA MOTA:' : 'TIPO DE EJERCICIO:'}
            </span>
            <div className="tab-list" role="tablist" aria-label="Tipo de ejercicio">
              <button 
                className={`tab-btn ${mode === 'mcq' ? 'active' : ''}`} 
                style={{ flex: 1, justifyContent: 'center' }}
                onClick={() => setMode('mcq')}
                role="tab"
                aria-selected={mode === 'mcq'}
              >
                {lang === 'eu' ? 'TEST-GALDETEGIA' : 'CUESTIONARIO TEST'}
              </button>
              <button 
                className={`tab-btn ${mode === 'flashcards' ? 'active' : ''}`}
                style={{ flex: 1, justifyContent: 'center' }}
                onClick={() => setMode('flashcards')}
                role="tab"
                aria-selected={mode === 'flashcards'}
              >
                {lang === 'eu' ? 'REPASO-TXARTELAK' : 'TARJETAS REPASO'}
              </button>
            </div>
          </div>
        </div>

        {/* Mode 1: Multiple Choice Questions */}
        {mode === 'mcq' && currentMcq && (
          <div className="animate-fade-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span className="badge badge-amber">
                {lang === 'eu' ? `GALDERA: ${currentQuestionIdx + 1} / ${mcqQuestions.length}` : `PREGUNTA ${currentQuestionIdx + 1} DE ${mcqQuestions.length}`}
              </span>
              <span className="badge badge-emerald">
                {lang === 'eu' ? `PUNTUAZIOA: ${score} / ${mcqQuestions.length}` : `PUNTUACIÓN: ${score} / ${mcqQuestions.length}`}
              </span>
            </div>

            <div style={{ background: '#111111', padding: '1.5rem', border: '1px solid var(--border-strong)', marginBottom: '1.25rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--white)' }}>
                {getLocalized(currentMcq.question)}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {currentMcq.options.map((opt, oIdx) => {
                  let btnClass = "option-btn";
                  if (selectedOption !== null) {
                    if (opt.isCorrect) btnClass += " selected-correct";
                    else if (selectedOption === oIdx) btnClass += " selected-incorrect";
                  }

                  return (
                    <button
                      key={oIdx}
                      className={btnClass}
                      onClick={() => handleSelectOption(oIdx, opt.isCorrect)}
                      disabled={selectedOption !== null}
                    >
                      <span>{opt.text}</span>
                      {selectedOption !== null && opt.isCorrect && <CheckCircle2 size={18} color="#3fb950" />}
                      {selectedOption === oIdx && !opt.isCorrect && <XCircle size={18} color="#f85149" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {showExplanation && (
              <div style={{ background: '#151206', border: '1px solid var(--accent)', padding: '1.25rem', marginBottom: '1.25rem' }} className="animate-fade-in">
                <div style={{ fontWeight: 800, fontSize: '0.85rem', color: 'var(--accent)', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase' }}>
                  <HelpCircle size={16} /> {lang === 'eu' ? 'AZALPEN DOKUMENTATUA:' : 'EXPLICACIÓN RAZONADA:'}
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray-200)' }}>
                  {getLocalized(currentMcq.explanation)}
                </p>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button className="btn btn-secondary btn-sm" onClick={handleResetMCQ}>
                <RotateCw size={14} />
                <span>{lang === 'eu' ? 'HASIERATU' : 'REINICIAR'}</span>
              </button>

              {currentQuestionIdx < mcqQuestions.length - 1 ? (
                <button 
                  className="btn btn-primary" 
                  onClick={handleNextMCQ}
                  disabled={selectedOption === null}
                >
                  {lang === 'eu' ? 'HURRENGO GALDERA' : 'SIGUIENTE PREGUNTA'}
                </button>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontWeight: 800, color: '#3fb950', fontFamily: 'var(--font-display)', textTransform: 'uppercase' }}>
                    {lang === 'eu' ? 'GALDETEGIA AMATUTA!' : '¡CUESTIONARIO COMPLETADO!'}
                  </span>
                  <button className="btn btn-primary btn-sm" onClick={handleResetMCQ}>
                    {lang === 'eu' ? 'BERRIRO EGIN' : 'REPETIR'}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mode 2: Flashcards */}
        {mode === 'flashcards' && currentFlashcard && (
          <div className="animate-fade-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span className="badge badge-amber">
                {lang === 'eu' ? `TXARTELA: ${flashcardIdx + 1} / ${flashcards.length}` : `TARJETA ${flashcardIdx + 1} DE ${flashcards.length}`}
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--gray-400)', fontFamily: 'var(--font-display)', textTransform: 'uppercase' }}>
                {lang === 'eu' ? '(Egin klik txartelean biratzeko)' : '(Haz clic en la tarjeta para darle la vuelta)'}
              </span>
            </div>

            <div className="flashcard-container" onClick={() => setIsFlipped(!isFlipped)}>
              <div className="flashcard" style={{ position: 'relative' }}>
                <span className="badge badge-amber" style={{ position: 'absolute', top: '1.25rem', left: '1.25rem' }}>
                  {isFlipped 
                    ? (lang === 'eu' ? 'ERANTZUNA / AZALPENA' : 'RESPUESTA / EXPLICACIÓN') 
                    : (lang === 'eu' ? 'GALDERA / KONTZEPTUA' : 'PREGUNTA / CONCEPTO')}
                </span>

                <div style={{ fontSize: '1.3rem', fontWeight: 800, marginTop: '1rem', color: 'var(--white)' }}>
                  {isFlipped ? getLocalized(currentFlashcard.answer) : getLocalized(currentFlashcard.question)}
                </div>

                <div style={{ marginTop: '1.5rem', color: 'var(--accent)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase' }}>
                  <RotateCw size={14} />
                  <span>{lang === 'eu' ? 'EGIN KLIK BIRATZEKO' : 'HAZ CLIC PARA VOLTEAR'}</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
              <button 
                className="btn btn-secondary"
                disabled={flashcardIdx === 0}
                onClick={() => {
                  setFlashcardIdx(prev => Math.max(0, prev - 1));
                  setIsFlipped(false);
                }}
              >
                {lang === 'eu' ? 'AURREKOA' : 'ANTERIOR'}
              </button>
              <button 
                className="btn btn-primary"
                disabled={flashcardIdx === flashcards.length - 1}
                onClick={() => {
                  setFlashcardIdx(prev => Math.min(flashcards.length - 1, prev + 1));
                  setIsFlipped(false);
                }}
              >
                {lang === 'eu' ? 'HURRENGO TXARTELA' : 'SIGUIENTE TARJETA'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
