import React from 'react';

export default function MathPage({ onBack, onStartGame }) {
  return (
    <div className="classroom-body">
      <header className="header-nav">
        <h2 className="nav-title">Math Zone 🔢</h2>
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
        <h1>Ready to Count? <span>✨</span></h1>
      </div>

      <div className="grid-container" style={{ justifyContent: 'center', marginTop: '40px' }}>
        <div 
          className="kid-card clay-glow bg-ocean-blue" 
          onClick={() => onStartGame(null, 'math-match')} 
          style={{ width: '280px', cursor: 'pointer' }}
        >
          <span style={{ fontSize: '80px' }}>🧩</span>
          <h2>Math Match</h2>
          <p style={{ color: 'white', opacity: 0.9 }}>Find the pairs!</p>
        </div>
      </div>
    </div>
  );
}