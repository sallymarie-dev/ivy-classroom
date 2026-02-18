import React, { useState } from 'react';
import ArtGame from '../components/ArtGame';

export default function ArtPage({ onBack }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasWon, setHasWon] = useState(false);

  return (
    <div className="classroom-body" style={{ minHeight: '100vh', background: '#f1c40f' }}>
      {!isPlaying ? (
        <>
          <header className="header-nav">
            <button className="nav-button" onClick={onBack} style={{backgroundColor: '#FF595E'}}>
              ⬅️ Back
            </button>
            <h2 className="nav-title">Art Studio 🎨</h2>
          </header>

          <div className="banner">
            <h1>Create Something Beautiful! ✨</h1>
          </div>

          <div className="grid-container" style={{ justifyContent: 'center', display: 'flex' }}>
            {/* ONLY the Art Game card shows here */}
            <div 
              className="kid-card clay-glow bg-sun-yellow" 
              onClick={() => setIsPlaying(true)}
              style={{ width: '300px', cursor: 'pointer' }}
            >
              <span style={{ fontSize: '60px' }}>🖌️</span>
              <h2>Sticker Book</h2>
              <p style={{ color: 'white', fontSize: '14px' }}>Click to start decorating!</p>
            </div>
          </div>
        </>
      ) : (
        /* When playing, only show the ArtGame component */
        <ArtGame 
          onBack={() => setIsPlaying(false)} 
          onWin={() => setHasWon(true)} 
        />
      )}

      {hasWon && (
        <div className="win-modal">
          <div className="modal-content">
            <h2>Masterpiece Finished! 🏆</h2>
            <p>Your art is amazing!</p>
            <button onClick={() => { setHasWon(false); setIsPlaying(false); }}>Play Again</button>
          </div>
        </div>
      )}
    </div>
  );
}