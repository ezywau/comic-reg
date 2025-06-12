import React, { useEffect, useState } from 'react';
import './style.css';

function App() {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <video className="background-video" autoPlay muted loop>
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <header className={`title ${isShrunk ? 'shrink sticky' : ''}`} id="main-title">
        COMIC 2025
      </header>

      <div className="content">
        <div className="button-group">
          <a href="/individu.html" className="reg-button">Pendaftaran Individu</a>
          <a href="/group.html" className="reg-button">Pendaftaran Kolektif</a>
        </div>
      </div>

      <section className="event-background">
        <h2>Tentang COMIC 2025</h2>
        <p>
          COMIC 2025 adalah sebuah acara kompetisi sains dan seni tahunan yang mempertemukan siswa terbaik dari berbagai sekolah untuk berkompetisi, belajar, dan berbagi pengalaman. Acara ini bertujuan untuk mendorong kreativitas, kolaborasi, dan inovasi di kalangan pelajar Indonesia.
        </p>
      </section>
    </div>
  );
}

export default App;