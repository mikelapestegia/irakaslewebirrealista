import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialCourses } from '../data/initialCourses';
import { initialAnnouncements } from '../data/initialAnnouncements';
import { initialQuizzes } from '../data/initialQuizzes';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Theme state
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('mikel_lab_theme') || 'dark';
  });

  // Language state (default 'eu' Basque or 'es' Spanish)
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('mikel_lab_lang') || 'es';
  });

  // Navigation tab state
  const [activeTab, setActiveTab] = useState('courses');

  // Courses data
  const [courses, setCourses] = useState(initialCourses);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Announcements data
  const [announcements, setAnnouncements] = useState(initialAnnouncements);

  // Quizzes data
  const [quizzes, setQuizzes] = useState(initialQuizzes);

  // Office Hours Bookings state
  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem('mikel_lab_bookings');
    return saved ? JSON.parse(saved) : [
      { id: 'b1', studentName: 'Jon Mikel Garmendia', date: '2026-09-02', time: '11:00', courseId: 'somo', topic: 'Dudas instalación Debian' }
    ];
  });

  // Apply theme to body document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('mikel_lab_theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('mikel_lab_lang', lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('mikel_lab_bookings', JSON.stringify(bookings));
  }, [bookings]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const addBooking = (newBooking) => {
    setBookings(prev => [
      ...prev,
      { ...newBooking, id: 'b-' + Date.now() }
    ]);
  };

  const toggleModuleCompletion = (courseId, moduleId) => {
    setCourses(prevCourses =>
      prevCourses.map(course => {
        if (course.id !== courseId) return course;
        const updatedModules = course.modules.map(mod =>
          mod.id === moduleId ? { ...mod, completed: !mod.completed } : mod
        );
        const completedCount = updatedModules.filter(m => m.completed).length;
        const progress = Math.round((completedCount / updatedModules.length) * 100);
        return { ...course, modules: updatedModules, progress };
      })
    );
  };

  // Helper for localized strings
  const getLocalized = (item) => {
    if (!item) return '';
    if (typeof item === 'string') return item;
    return item[lang] || item['es'] || item['en'] || '';
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        lang,
        setLang,
        activeTab,
        setActiveTab,
        courses,
        selectedCourse,
        setSelectedCourse,
        announcements,
        quizzes,
        bookings,
        addBooking,
        toggleModuleCompletion,
        getLocalized
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
