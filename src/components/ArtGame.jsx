import React, { useState } from 'react';

const STICKERS = ["🎨", "🌈", "🦒", "🌿", "🌸", "☀️", "🦋", "🍄"];

export default function ArtGame({ onBack, onWin }) {
  const [placedStickers, setPlacedStickers] = useState([]);
  const [selectedSticker, setSelectedSticker] = useState(STICKERS[0]);

  const handleCanvasClick = (e) => {
    // Get click coordinates relative to the canvas
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPlacedStickers([...placedStickers, { x, y, icon: selectedSticker, id: Date.now() }]);
    
    // If they place 10 stickers, they "win" a reward 
    if (placedStickers.length + 1 === 10) {
        onWin();
    }
  };

  const clearCanvas = () => setPlacedStickers([]);

  return (
    <div className="art-game-container" style={{ textAlign: 'center', color: 'white' }}>
      <button onClick={onBack} className="nav-button" style={{ marginBottom: '10px' }}>⬅️ Back</button>
      
      <h2>Art Studio 🎨</h2>
      <p>Click a sticker, then click the canvas to decorate!</p>

      {/* Sticker Toolbar */}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px', background: 'rgba(0,0,0,0.2)', padding: '10px', borderRadius: '15px' }}>
        {STICKERS.map(s => (
          <button 
            key={s} 
            onClick={() => setSelectedSticker(s)}
            style={{ 
                fontSize: '30px', 
                background: selectedSticker === s ? '#FFCA3A' : 'white',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
                transform: selectedSticker === s ? 'scale(1.2)' : 'scale(1)',
                transition: '0.2s'
            }}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Drawing Canvas */}
      <div 
        onClick={handleCanvasClick}
        style={{ 
          width: '90%', 
          height: '350px', 
          backgroundColor: 'white', 
          margin: '0 auto', 
          borderRadius: '20px', 
          position: 'relative', 
          overflow: 'hidden',
          cursor: 'crosshair',
          boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)'
        }}
      >
        {placedStickers.map(s => (
          <div key={s.id} style={{ position: 'absolute', left: s.x - 15, top: s.y - 15, fontSize: '40px', pointerEvents: 'none' }}>
            {s.icon}
          </div>
        ))}
        {placedStickers.length === 0 && <p style={{ color: '#ccc', marginTop: '150px' }}>Tap here to start your masterpiece!</p>}
      </div>

      <button onClick={clearCanvas} style={{ marginTop: '20px', padding: '10px 20px', borderRadius: '10px', background: '#FF595E', color: 'white', border: 'none', fontWeight: 'bold' }}>
        🗑️ Clear Canvas
      </button>
    </div>
  );
}