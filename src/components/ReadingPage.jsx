import React from 'react';

export default function ReadingPage({ onBack, onStartGame }) {
  return (
    <div className="classroom-body">
      <header className="header-nav">
        <h2 className="nav-title">Reading Room 📚</h2>
        <div className="nav-button-group">
          <button 
            className="nav-button" 
            onClick={onBack} 
            style={{backgroundColor: '#FF595E'}}
          >
            ⬅ Back
          </button>
        </div>
      </header>

      <div className="banner">
        <h1>Pick a Story Activity! <span>✨</span></h1>
      </div>

      <div className="grid-container" style={{ justifyContent: 'center', marginTop: '40px' }}>
        <div 
          className="kid-card clay-glow bg-apple-red" 
          onClick={() => onStartGame(null, 'build-sentence')} 
          style={{ width: '280px', cursor: 'pointer' }}
        >
          <span style={{ fontSize: '80px' }}>📖</span>
          <h2>Sentence Build</h2>
          <p style={{ color: 'white', opacity: 0.9 }}>Mix and match words!</p>
        </div>
      </div>
    </div>
  );
}