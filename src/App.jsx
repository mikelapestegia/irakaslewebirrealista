import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { HeroHeader } from './components/HeroHeader';
import { CourseCard } from './components/CourseCard';
import { CourseDetailModal } from './components/CourseDetailModal';
import { Timetable } from './components/Timetable';
import { ResourceLibrary } from './components/ResourceLibrary';
import { GradeCalculator } from './components/GradeCalculator';
import { QuizModule } from './components/QuizModule';
import { BookingModal } from './components/BookingModal';
import { Announcements } from './components/Announcements';
import { WipBanner } from './components/WipBanner';
import { CookieBanner } from './components/CookieBanner';
import { LegalModal } from './components/LegalModal';
import { GraduationCap } from 'lucide-react';
import './styles/components.css';

const MainContent = () => {
  const { lang, activeTab, setActiveTab, courses } = useApp();
  
  const [selectedCourseForDetail, setSelectedCourseForDetail] = useState(null);
  const [courseForCalculator, setCourseForCalculator] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingDefaultCourse, setBookingDefaultCourse] = useState(null);
  const [legalTab, setLegalTab] = useState(null);

  const handleOpenBooking = (cId = null) => {
    setBookingDefaultCourse(cId);
    setIsBookingOpen(true);
  };

  const handleOpenCalculator = (course) => {
    setCourseForCalculator(course);
    setActiveTab('calculator');
  };

  const skipLinkText = {
    es: "Saltar al contenido principal",
    eu: "Eskuratu edukia zuzenean",
    en: "Skip to main content"
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <WipBanner onOpenLegal={() => setLegalTab('terms')} />

      <a href="#main-content" className="skip-link">
        {skipLinkText[lang] || skipLinkText['es']}
      </a>

      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="app-container" id="main-content" tabIndex="-1" style={{ flex: 1, outline: 'none' }}>
        <HeroHeader onOpenBooking={() => handleOpenBooking()} />

        {/* Courses */}
        {activeTab === 'courses' && (
          <section className="animate-fade-in">
            <div style={{ marginBottom: '1.25rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                {lang === 'eu' ? 'Hiruhileko moduluak' : lang === 'es' ? 'Módulos del trimestre' : 'Term modules'}
              </h2>
              <p style={{ color: 'var(--text-tertiary)', fontSize: '0.825rem' }}>
                {lang === 'eu' ? 'Sakatu modulu batean xehetasunak ikusteko.' : lang === 'es' ? 'Selecciona un módulo para ver temario, materiales y progreso.' : 'Select a module to view syllabus, materials and progress.'}
              </p>
            </div>

            <div className="grid-courses">
              {courses.map(course => (
                <CourseCard 
                  key={course.id} 
                  course={course} 
                  onOpenDetail={(c) => setSelectedCourseForDetail(c)}
                  onOpenCalc={(c) => handleOpenCalculator(c)}
                />
              ))}
            </div>
          </section>
        )}

        {activeTab === 'timetable' && (
          <section className="animate-fade-in"><Timetable /></section>
        )}

        {activeTab === 'resources' && (
          <section className="animate-fade-in"><ResourceLibrary /></section>
        )}

        {activeTab === 'calculator' && (
          <section className="animate-fade-in">
            <GradeCalculator initialCourse={courseForCalculator} />
          </section>
        )}

        {activeTab === 'quizzes' && (
          <section className="animate-fade-in"><QuizModule /></section>
        )}

        {activeTab === 'announcements' && (
          <section className="animate-fade-in"><Announcements /></section>
        )}
      </main>

      {selectedCourseForDetail && (
        <CourseDetailModal 
          course={selectedCourseForDetail} 
          onClose={() => setSelectedCourseForDetail(null)} 
          onOpenBooking={(cId) => handleOpenBooking(cId)}
        />
      )}

      {isBookingOpen && (
        <BookingModal 
          defaultCourseId={bookingDefaultCourse}
          onClose={() => setIsBookingOpen(false)}
        />
      )}

      {legalTab && (
        <LegalModal 
          initialTab={legalTab} 
          onClose={() => setLegalTab(null)} 
        />
      )}

      <CookieBanner onOpenLegal={() => setLegalTab('cookies')} />

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--border)', padding: '1.5rem 1.25rem', background: '#080808' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontSize: '0.825rem', color: 'var(--gray-300)' }}>
            <GraduationCap size={16} color="var(--accent)" aria-hidden="true" />
            <span>Mikel <span className="text-accent">Laborategi</span> © 2026</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.75rem', color: 'var(--gray-400)', flexWrap: 'wrap' }}>
            <button onClick={() => setLegalTab('terms')} style={{ background: 'none', border: 'none', color: 'var(--gray-300)', cursor: 'pointer', fontSize: '0.75rem' }}>
              {lang === 'eu' ? 'Lege Oharra' : 'Aviso Legal'}
            </button>
            <span>·</span>
            <button onClick={() => setLegalTab('privacy')} style={{ background: 'none', border: 'none', color: 'var(--gray-300)', cursor: 'pointer', fontSize: '0.75rem' }}>
              {lang === 'eu' ? 'Pribatutasuna (DBEO)' : 'Privacidad (RGPD)'}
            </button>
            <span>·</span>
            <button onClick={() => setLegalTab('cookies')} style={{ background: 'none', border: 'none', color: 'var(--gray-300)', cursor: 'pointer', fontSize: '0.75rem' }}>
              {lang === 'eu' ? 'Cookies' : 'Cookies'}
            </button>
          </div>

          <div style={{ fontSize: '0.75rem', color: 'var(--gray-400)' }}>
            {lang === 'eu' ? 'CI Politécnico Estella · Lizarra LHI · Informatika Saila' : 'CI Politécnico Estella · Lizarra · Dpto. Informática'}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
