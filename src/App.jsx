import React, { useState, useEffect, Suspense, lazy } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { HeroHeader } from './components/HeroHeader';
import { CourseCard } from './components/CourseCard';
import { Timetable } from './components/Timetable';
import { Announcements } from './components/Announcements';
import { GraduationCap } from 'lucide-react';
import './styles/components.css';

// Code-Splitting Dinámico con React.lazy()
const CourseDetailModal = lazy(() => import('./components/CourseDetailModal').then(m => ({ default: m.CourseDetailModal })));
const ResourceLibrary = lazy(() => import('./components/ResourceLibrary').then(m => ({ default: m.ResourceLibrary })));
const GradeCalculator = lazy(() => import('./components/GradeCalculator').then(m => ({ default: m.GradeCalculator })));
const QuizModule = lazy(() => import('./components/QuizModule').then(m => ({ default: m.QuizModule })));
const BookingModal = lazy(() => import('./components/BookingModal').then(m => ({ default: m.BookingModal })));
const LegalModal = lazy(() => import('./components/LegalModal').then(m => ({ default: m.LegalModal })));
const CommandPalette = lazy(() => import('./components/CommandPalette').then(m => ({ default: m.CommandPalette })));

const SuspenseFallback = () => (
  <div style={{ padding: '3rem 1rem', textAlign: 'center', color: 'var(--accent)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.05em' }}>
    CARGANDO MÓDULO...
  </div>
);

const MainContent = () => {
  const { lang, activeTab, setActiveTab, courses } = useApp();
  
  const [selectedCourseForDetail, setSelectedCourseForDetail] = useState(null);
  const [courseForCalculator, setCourseForCalculator] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingDefaultCourse, setBookingDefaultCourse] = useState(null);
  const [legalTab, setLegalTab] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Global Keyboard Shortcuts (Power-User & Accessibility)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger shortcuts if user is typing in form inputs
      const activeElement = document.activeElement;
      const isInput = activeElement && (
        activeElement.tagName === 'INPUT' || 
        activeElement.tagName === 'TEXTAREA' || 
        activeElement.tagName === 'SELECT' || 
        activeElement.isContentEditable
      );

      // Ctrl + K or Cmd + K -> Open Command Palette
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
        return;
      }

      if (isInput) return;

      // Number keys 1-6 for tab navigation
      if (e.key === '1') setActiveTab('courses');
      if (e.key === '2') setActiveTab('timetable');
      if (e.key === '3') setActiveTab('resources');
      if (e.key === '4') setActiveTab('calculator');
      if (e.key === '5') setActiveTab('quizzes');
      if (e.key === '6') setActiveTab('announcements');

      // '?' key -> Open Command Palette
      if (e.key === '?') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setActiveTab]);

  // Scroll to top on every tab change for clean UX
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

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


      <a href="#main-content" className="skip-link">
        {skipLinkText[lang] || skipLinkText['es']}
      </a>

      <Navbar 
        onOpenBooking={() => handleOpenBooking()} 
        onOpenSearch={() => setIsSearchOpen(true)}
      />

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
          <Suspense fallback={<SuspenseFallback />}>
            <section className="animate-fade-in"><ResourceLibrary /></section>
          </Suspense>
        )}

        {activeTab === 'calculator' && (
          <Suspense fallback={<SuspenseFallback />}>
            <section className="animate-fade-in">
              <GradeCalculator initialCourse={courseForCalculator} />
            </section>
          </Suspense>
        )}

        {activeTab === 'quizzes' && (
          <Suspense fallback={<SuspenseFallback />}>
            <section className="animate-fade-in"><QuizModule /></section>
          </Suspense>
        )}

        {activeTab === 'announcements' && (
          <section className="animate-fade-in"><Announcements /></section>
        )}
      </main>

      <Suspense fallback={null}>
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

        {isSearchOpen && (
          <CommandPalette 
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
            onOpenBooking={() => handleOpenBooking()}
            onOpenLegal={(tab) => setLegalTab(tab)}
          />
        )}
      </Suspense>

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
            {lang === 'eu' ? '2026-2027 Ikasturtea · Informatika' : lang === 'en' ? 'Academic Year 2026-2027 · IT Dept.' : 'Curso 2026-2027 · Dpto. Informática'}
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
