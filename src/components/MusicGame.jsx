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
    const audio = new Audio(`/sounds/note-${note}.mp3`);
    audio.play().catch(() => console.log("Add mp3 files to public/sounds!"));
    
    setPlayCount(prev => {
      if (prev + 1 === 10) onWin(); // Trigger victory after 10 notes
      return prev + 1;
    });
  };

  return (
    <div className="music-game-container" style={{ textAlign: 'center' }}>
      <button onClick={onBack} className="nav-button">⬅️ Back</button>
      <h2 style={{ color: 'white' }}>Nature Xylophone 🎶</h2>
      
      <div style={{ 
        display: 'flex', 
        gap: '10px', 
        justifyContent: 'center', 
        height: '300px', 
        padding: '20px' 
      }}>
        {NOTES.map((n) => (
          <div
            key={n.note}
            onClick={() => playNote(n.note)}
            className="kid-card clay-glow"
            style={{ 
              backgroundColor: n.color, 
              width: '60px', 
              height: `${200 + (NOTES.indexOf(n) * 20)}px`, // Step effect
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingBottom: '20px'
            }}
          >
            <span style={{ fontWeight: 'bold', color: 'white' }}>{n.note}</span>
          </div>
        ))}
      </div>
      <p style={{ color: 'white' }}>Tap the bars to make music!</p>
    </div>
  );
}