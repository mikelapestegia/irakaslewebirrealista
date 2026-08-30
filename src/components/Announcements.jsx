import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Search, Calendar } from 'lucide-react';

export const Announcements = () => {
  const { lang, announcements, courses, getLocalized, theme } = useApp();
  const [activeTag, setActiveTag] = useState('all');
  const [search, setSearch] = useState('');

  const getCourseCode = (courseId) => {
    if (courseId === 'all') return 'GENERAL';
    const c = courses.find(item => item.id === courseId);
    return c ? c.code : 'GENERAL';
  };

  const getBadgeClass = (tag) => {
    switch (tag) {
      case 'urgent': return 'badge-rose';
      case 'material': return 'badge-cyan';
      case 'office': return 'badge-emerald';
      default: return 'badge-amber';
    }
  };

  const filteredAnnouncements = announcements.filter(item => {
    const matchesTag = activeTag === 'all' || item.tag === activeTag;
    const title = getLocalized(item.title).toLowerCase();
    const content = getLocalized(item.content).toLowerCase();
    const matchesSearch = title.includes(search.toLowerCase()) || content.includes(search.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <div className="glass-panel animate-fade-in" style={{ padding: '0', background: '#0d0d0d', border: '1px solid var(--border-strong)' }}>
      {/* Banner Header with Active Theme Artwork */}
      <div 
        style={{
          position: 'relative',
          padding: '2.5rem 2rem',
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 100%), url('${import.meta.env.BASE_URL}images/bg_navarra_${theme}_1.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottom: '1px solid var(--border-strong)'
        }}
      >
        <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--white)', letterSpacing: '0.04em', marginBottom: '0.35rem' }}>
          {lang === 'eu' ? 'IRAKASLEAREN OHAR ETA BERRIAK' : 'TABLÓN DE AVISOS Y NOVEDADES DOCENTES'}
        </h2>
        <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, letterSpacing: '0.06em' }}>
          {lang === 'eu' ? 'GELA ALDAKETAK, AZTERKETA DATAK ETA OHAR GARRANTZITSUAK' : 'ÚLTIMAS NOVEDADES SOBRE CAMBIOS DE AULA, ENTREGAS, TUTORÍAS Y EXÁMENES'}
        </p>
      </div>

      <div style={{ padding: '1.75rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--gray-400)' }} />
            <input 
              type="text"
              className="input-field"
              style={{ paddingLeft: '2.75rem' }}
              placeholder={lang === 'eu' ? 'Bilatu oharretan...' : 'BUSCAR EN LOS AVISOS...'}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              id="input-search-announcements"
            />
          </div>

          <div className="tab-list">
            <button 
              className={`tab-btn ${activeTag === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTag('all')}
            >
              {lang === 'eu' ? 'GUZTIAK' : 'TODOS'}
            </button>
            <button 
              className={`tab-btn ${activeTag === 'urgent' ? 'active' : ''}`}
              onClick={() => setActiveTag('urgent')}
            >
              {lang === 'eu' ? 'PREMIAZKOAK' : 'URGENTES'}
            </button>
            <button 
              className={`tab-btn ${activeTag === 'material' ? 'active' : ''}`}
              onClick={() => setActiveTag('material')}
            >
              MATERIAL
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filteredAnnouncements.map(ann => (
            <div 
              key={ann.id} 
              className="glass-card"
              style={{ 
                padding: '1.25rem',
                background: '#111111', 
                borderLeft: ann.tag === 'urgent' ? '4px solid #f85149' : '1px solid var(--border-strong)',
                borderTop: '1px solid var(--border-strong)',
                borderRight: '1px solid var(--border-strong)',
                borderBottom: '1px solid var(--border-strong)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                  <span className={`badge ${getBadgeClass(ann.tag)}`}>
                    {getLocalized(ann.tagLabel).toUpperCase()}
                  </span>
                  <span className="badge badge-amber">
                    {getCourseCode(ann.courseId)}
                  </span>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--gray-400)', display: 'flex', alignItems: 'center', gap: '0.25rem', fontFamily: 'var(--font-display)' }}>
                  <Calendar size={13} color="var(--accent)" />
                  {ann.date}
                </span>
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--white)' }}>
                {getLocalized(ann.title)}
              </h3>

              <p style={{ color: 'var(--gray-300)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                {getLocalized(ann.content)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
