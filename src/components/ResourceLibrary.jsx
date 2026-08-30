import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { FolderDown, Search, FileText, Code, FileArchive, Download } from 'lucide-react';

export const ResourceLibrary = () => {
  const { lang, courses, getLocalized, theme } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourseId, setSelectedCourseId] = useState('all');

  // Clean raw filenames like SCRIPT_BIENVENIDA_Y_CONFIG → Script Bienvenida Y Config
  const formatTitle = (raw) => raw
    .replace(/\.[^.]+$/, '')          // strip extension
    .replace(/_/g, ' ')               // underscores → spaces
    .replace(/\b\w/g, c => c.toUpperCase()); // title-case

  const allResources = courses.flatMap(course => 
    course.resources.map(res => ({
      ...res,
      courseCode: course.code,
      courseId: course.id,
      courseTitle: getLocalized(course.title)
    }))
  );

  const filteredResources = allResources.filter(res => {
    const matchesSearch = res.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          res.courseCode.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCourse = selectedCourseId === 'all' || res.courseId === selectedCourseId;
    return matchesSearch && matchesCourse;
  });

  const getIcon = (type) => {
    switch (type) {
      case 'code': return <Code size={20} color="var(--accent)" />;
      case 'zip': return <FileArchive size={20} color="var(--accent)" />;
      default: return <FileText size={20} color="var(--accent)" />;
    }
  };

  return (
    <div className="glass-panel animate-fade-in" style={{ padding: '0', background: '#0d0d0d', border: '1px solid var(--border-strong)' }}>
      {/* Banner Header with Active Theme Artwork Background */}
      <div 
        style={{
          position: 'relative',
          padding: '2.5rem 2rem',
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.7) 100%), url('${import.meta.env.BASE_URL}images/bg_navarra_${theme}_3.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottom: '1px solid var(--border-strong)'
        }}
      >
        <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--white)', letterSpacing: '0.04em', marginBottom: '0.35rem' }}>
          {lang === 'eu' ? 'BALIABIDE ETA MATERIALEN BILTEGIA' : 'BIBLIOTECA CENTRAL DE RECURSOS Y APUNTES'}
        </h2>
        <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, letterSpacing: '0.06em' }}>
          {lang === 'eu' ? 'PDF, KODE ETA AURKEZPEN GUZTIAK DESKARGATZEKO' : 'ACCESO UNIFICADO A GUÍAS, TRANSPARENCIAS Y CÓDIGO FUENTE'}
        </p>
      </div>

      <div style={{ padding: '1.75rem 2rem' }}>
        {/* Filter and Search Bar */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--gray-400)' }} />
            <input 
              type="text"
              className="input-field"
              style={{ paddingLeft: '2.75rem' }}
              placeholder={lang === 'eu' ? 'Bilatu fitxategia edo kodea...' : 'BUSCAR ARCHIVO, GUÍA O CÓDIGO...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              id="input-search-resources"
            />
          </div>

          <select 
            className="input-field" 
            style={{ minWidth: '220px' }}
            value={selectedCourseId}
            onChange={(e) => setSelectedCourseId(e.target.value)}
            id="select-course-filter"
          >
            <option value="all">{lang === 'eu' ? 'IRAKASGAI GUZTIAK' : lang === 'en' ? 'ALL SUBJECTS' : 'TODAS LAS ASIGNATURAS'}</option>
            {courses.map(c => (
              <option key={c.id} value={c.id}>
                {c.code} - {getLocalized(c.title)}
              </option>
            ))}
          </select>
        </div>

        {/* Resource Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1rem' }}>
          {filteredResources.map(res => (
            <div key={res.id} className="glass-card" style={{ padding: '1.25rem', background: '#111111', border: '1px solid var(--border-strong)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ background: '#000000', padding: '0.6rem', border: '1px solid var(--accent)' }}>
                    {getIcon(res.type)}
                  </div>
                  <div>
                    <span className="badge badge-amber" style={{ fontSize: '0.7rem' }}>{res.courseCode}</span>
                    <div style={{ fontSize: '0.75rem', color: 'var(--gray-400)', marginTop: '0.2rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase' }}>
                      {res.courseTitle}
                    </div>
                  </div>
                </div>
              </div>

              <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '0.75rem', lineHeight: 1.25, letterSpacing: '0.02em', color: 'var(--white)', wordBreak: 'break-word' }}>
                {formatTitle(res.title)}
              </h4>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: 'var(--gray-400)', fontFamily: 'var(--font-display)', textTransform: 'uppercase', paddingTop: '0.75rem', borderTop: '1px solid var(--border)' }}>
                <span>TAM: {res.size} • {res.date}</span>
                <button 
                  className="btn btn-secondary btn-sm"
                  onClick={() => alert(`Descargando: ${res.title}`)}
                  id={`btn-download-${res.id}`}
                >
                  <Download size={14} />
                  <span>{lang === 'eu' ? 'DESKARGATU' : 'DESCARGAR'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
