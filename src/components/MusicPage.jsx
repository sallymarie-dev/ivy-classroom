import React, { useState } from 'react';
import MusicGame from '../components/MusicGame';

export default function MusicPage({ onBack }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasWon, setHasWon] = useState(false);

  return (
    <div className="classroom-body" style={{ minHeight: '100vh', background: '#FF9248' }}>
      {!isPlaying ? (
        <>
          <header className="header-nav">
            <button className="nav-button" onClick={onBack} style={{backgroundColor: '#FF595E'}}>⬅️ Back</button>
            <h2 className="nav-title">Music Room 🎵</h2>
          </header>
          <div className="banner"><h1>Time for a Jam Session! 🥁</h1></div>
          <div className="grid-container" style={{ justifyContent: 'center', display: 'flex' }}>
            <div className="kid-card clay-glow bg-music-orange" onClick={() => setIsPlaying(true)} style={{ width: '300px' }}>
              <span style={{ fontSize: '60px' }}>🎷</span>
              <h2>Nature Beats</h2>
              <p style={{ color: 'white' }}>Play the colorful xylophone!</p>
            </div>
          </div>
        </>
      ) : (
        <MusicGame onBack={() => setIsPlaying(false)} onWin={() => setHasWon(true)} />
      )}

      {hasWon && (
        <div className="win-modal">
          <div className="modal-content">
            <h2>Musical Genius! 🏆</h2>
            <button onClick={() => { setHasWon(false); setIsPlaying(false); }}>Play Again</button>
          </div>
        </div>
      )}
    </div>
  );
}