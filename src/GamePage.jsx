import React, { useState } from 'react';


export default function GamePage({ onBack }) {
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="game-container" style={{ textAlign: 'center', padding: '20px' }}>
      <button onClick={onBack} className="nav-button">⬅ Back to Class</button>
      
      <h1>2nd Grade Math Match 🔢</h1>
      
      <div style={{ margin: '40px', padding: '20px', border: '4px dashed #FFCA3A', borderRadius: '20px' }}>
        <p>Game Logic coming soon...</p>
        <button 
          onClick={() => setShowQR(true)}
          style={{ padding: '10px', background: '#8AC926', borderRadius: '10px', cursor: 'pointer' }}
        >
          Simulate Win (Show QR Code)
        </button>
      </div>

      
      {showQR && (
        <div className="modal-overlay" style={modalStyles}>
          <div className="modal-content">
            <h2>You Won! 🌟</h2>
            <p>Scan to get your sticker:</p>
            <div id="qrcode-placeholder" style={{ background: '#eee', height: '150px', width: '150px', margin: '0 auto' }}>
              
            </div>
            <button onClick={() => setShowQR(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

const modalStyles = {
  position: 'fixed',
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex', justifyContent: 'center', alignItems: 'center'
};