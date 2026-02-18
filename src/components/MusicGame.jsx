import React, { useState } from 'react';

const NOTES = [
  { color: '#FF595E', note: 'C', key: '1' },
  { color: '#FFCA3A', note: 'D', key: '2' },
  { color: '#8AC926', note: 'E', key: '3' },
  { color: '#1982C4', note: 'F', key: '4' },
  { color: '#6A4C93', note: 'G', key: '5' },
];

export default function MusicGame({ onBack, onWin }) {
  const [playCount, setPlayCount] = useState(0);

  const playNote = (note) => {
    // This matches your filenames: c.mp3, d.mp3, etc.
    const fileName = `${note.toLowerCase()}.mp3`;
    const audio = new Audio(`/${fileName}`);
    
    audio.play().catch((err) => {
      console.warn(`Audio file ${fileName} not found in public folder.`, err);
    });
    
    // Logic to trigger the win modal for tomorrow's QR task
    setPlayCount(prev => {
      const nextCount = prev + 1;
      if (nextCount === 10) {
        if (onWin) onWin(); 
      }
      return nextCount;
    });
  };

  return (
    <div className="music-game-container" style={{ textAlign: 'center', padding: '20px' }}>
      <button onClick={onBack} className="nav-button" style={{ marginBottom: '20px' }}>
        ⬅️ Back
      </button>
      
      <h2 style={{ color: 'white', marginBottom: '30px' }}>Nature Xylophone 🎶</h2>
      
      <div style={{ 
        display: 'flex', 
        gap: '15px', 
        justifyContent: 'center', 
        alignItems: 'flex-start',
        height: '350px' 
      }}>
        {NOTES.map((n, index) => (
          <div
            key={n.note}
            onClick={() => playNote(n.note)}
            className="kid-card clay-glow"
            style={{ 
              backgroundColor: n.color, 
              width: '70px', 
              height: `${220 + (index * 25)}px`, // Creates the stepped look
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingBottom: '20px',
              transition: 'transform 0.1s active'
            }}
            onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <span style={{ fontWeight: 'bold', color: 'white', fontSize: '24px' }}>
              {n.note}
            </span>
          </div>
        ))}
      </div>
      
      <p style={{ color: 'white', marginTop: '20px', fontSize: '18px' }}>
        Tap the bars to play! {10 - playCount > 0 ? `Play ${10 - playCount} more notes for a prize!` : "Great job!"}
      </p>
    </div>
  );
}