import React, { useState } from 'react';
import ScienceGame from '../components/ScienceGame';

export default function SciencePage({ onBack }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="science-page" style={{ padding: '20px', minHeight: '100vh', background: '#2c3e50' }}>
      {!isPlaying ? (
        <div className="science-menu">
          <header className="header-nav" style={{ marginBottom: '20px' }}>
             <button className="nav-button" onClick={onBack}>⬅️ Back</button>
             <h1 style={{ color: 'white', display: 'inline', marginLeft: '20px' }}>🔬 Discovery Lab</h1>
          </header>
          
          <p style={{ color: '#bdc3c7' }}>Select an experiment to begin!</p>
          
          <div 
            className="game-card kid-card clay-glow bg-grass-green"
            onClick={() => setIsPlaying(true)}
            style={{ cursor: 'pointer', padding: '20px', marginTop: '20px', maxWidth: '300px' }}
          >
            <span style={{ fontSize: '50px' }}>🧪</span>
            <h3>Plant Growth Lab</h3>
            <p>Learn what plants need to survive!</p>
          </div>
        </div>
      ) : (
        <ScienceGame onBack={() => setIsPlaying(false)} />
      )}
    </div>
  );
}