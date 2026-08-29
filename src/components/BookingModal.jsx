import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { X, CheckCircle2 } from 'lucide-react';

export const BookingModal = ({ defaultCourseId, onClose }) => {
  const { lang, courses, addBooking } = useApp();

  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [courseId, setCourseId] = useState(defaultCourseId || courses[0].id);
  const [date, setDate] = useState('2026-09-04');
  const [time, setTime] = useState('11:00');
  const [topic, setTopic] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!studentName || !topic) return;

    addBooking({
      studentName,
      studentEmail,
      courseId,
      date,
      time,
      topic
    });

    setIsSuccess(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  const labels = {
    title: { es: "RESERVAR CITA DE TUTORÍA", eu: "TUTORETZA-HITZORDUA ERRESERBATU", en: "BOOK OFFICE HOURS SESSION" },
    subtitle: { es: "Selecciona una fecha y hora disponible con el profesor Mikel", eu: "Hautatu eskuragarri dagoen data eta ordua Mikel irakaslearekin", en: "Select an available date and time slot with teacher Mikel" },
    nameLabel: { es: "NOMBRE Y APELLIDOS DEL ALUMNO/A:", eu: "IKASLEAREN IZENA ETA ABIZENAK:", en: "STUDENT FULL NAME:" },
    emailLabel: { es: "CORREO INSTITUCIONAL (@EDUCACION.NAVARRA.ES):", eu: "POSTA ELEKTRONIKOA (@EDUCACION.NAVARRA.ES):", en: "INSTITUTIONAL EMAIL:" },
    courseLabel: { es: "MÓDULO A CONSULTAR:", eu: "KONTSULTATZEKO MODULUA:", en: "COURSE TO CONSULT:" },
    dateLabel: { es: "FECHA PREFERIDA:", eu: "AUKERATUTAKO DATA:", en: "PREFERRED DATE:" },
    timeLabel: { es: "HORA DISPONIBLE:", eu: "ORDU ERABILGARRIA:", en: "AVAILABLE TIME SLOT:" },
    topicLabel: { es: "MOTIVO / TEMA DE LA CONSULTA:", eu: "KONTSULTAREN GAIA EDO ARRAZOIA:", en: "CONSULTATION TOPIC:" },
    submitBtn: { es: "CONFIRMAR RESERVA DE TUTORÍA", eu: "BERRETSI TUTORETZA-ERRESERBA", en: "CONFIRM TUTORING BOOKING" },
    successMsg: { es: "¡RESERVA REGISTRADA CON ÉXITO!", eu: "ERRESERBA ONDO ERREGISTRATU DA!", en: "BOOKING CONFIRMED SUCCESSFULLY!" },
    closeBtn: { es: "Cerrar ventana modal", eu: "Itxi leiho modala", en: "Close modal window" }
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="booking-modal-title">
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '600px', padding: '2rem' }} id="booking-modal">
        <button 
          className="modal-close-btn" 
          onClick={onClose} 
          id="btn-close-booking"
          aria-label={labels.closeBtn[lang] || labels.closeBtn['es']}
        >
          <X size={20} />
        </button>

        {isSuccess ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }} className="animate-fade-in" aria-live="polite">
            <CheckCircle2 size={64} color="#3fb950" style={{ margin: '0 auto 1rem' }} />
            <h3 id="booking-modal-title" style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '0.5rem', color: 'var(--white)', letterSpacing: '0.04em' }}>
              {labels.successMsg[lang]}
            </h3>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-strong)', paddingBottom: '1rem' }}>
              <h2 id="booking-modal-title" style={{ fontSize: '1.6rem', fontWeight: 900, letterSpacing: '0.04em', color: 'var(--white)' }}>
                {labels.title[lang]}
              </h2>
              <p style={{ color: 'var(--gray-300)', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                {labels.subtitle[lang]}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <label htmlFor="input-student-name" style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--gray-300)', marginBottom: '0.35rem' }}>
                  {labels.nameLabel[lang]}
                </label>
                <input 
                  type="text" 
                  className="input-field"
                  required
                  placeholder="Ej. Ane Agirre"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  id="input-student-name"
                />
              </div>

              <div>
                <label htmlFor="input-student-email" style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--gray-300)', marginBottom: '0.35rem' }}>
                  {labels.emailLabel[lang]}
                </label>
                <input 
                  type="email" 
                  className="input-field"
                  required
                  placeholder="a.agirre@educacion.navarra.es"
                  value={studentEmail}
                  onChange={(e) => setStudentEmail(e.target.value)}
                  id="input-student-email"
                />
              </div>

              <div>
                <label htmlFor="select-booking-course" style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--gray-300)', marginBottom: '0.35rem' }}>
                  {labels.courseLabel[lang]}
                </label>
                <select 
                  className="input-field"
                  value={courseId}
                  onChange={(e) => setCourseId(e.target.value)}
                  id="select-booking-course"
                >
                  {courses.map(c => (
                    <option key={c.id} value={c.id}>
                      {c.code} - {c.title[lang] || c.title['es']}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--gray-300)', marginBottom: '0.35rem' }}>
                    {labels.dateLabel[lang]}
                  </label>
                  <input 
                    type="date"
                    className="input-field"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    id="input-booking-date"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--gray-300)', marginBottom: '0.35rem' }}>
                    {labels.timeLabel[lang]}
                  </label>
                  <select 
                    className="input-field"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    id="select-booking-time"
                  >
                    <option value="10:00">10:00 - 10:30</option>
                    <option value="11:00">11:00 - 11:30</option>
                    <option value="12:00">12:00 - 12:30</option>
                    <option value="16:00">16:00 - 16:30 (Viernes)</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--gray-300)', marginBottom: '0.35rem' }}>
                  {labels.topicLabel[lang]}
                </label>
                <textarea 
                  className="input-field"
                  rows="3"
                  required
                  placeholder="Describe brevemente tus dudas o la razón de la consulta..."
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  id="input-booking-topic"
                ></textarea>
              </div>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.85rem' }} id="btn-submit-booking">
              {labels.submitBtn[lang]}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
