import React, { useState } from 'react';

export default function ScienceGame({ onBack }) {
  const [growth, setGrowth] = useState(10); // Plant height in %
  const [stage, setStage] = useState("Seedling");

  const growPlant = (type) => {
    setGrowth(prev => {
      const newGrowth = Math.min(prev + 10, 100);
      if (newGrowth > 80) setStage("Giant Tree 🌳");
      else if (newGrowth > 40) setStage("Sprout 🌱");
      return newGrowth;
    });
  };

  return (
    <div className="science-game-container" style={{ textAlign: 'center', color: 'white' }}>
      <button onClick={onBack} className="nav-button">⬅️ Back to Lab</button>
      
      <h2>Science Lab: Grow the Acacia!</h2>
      <p>Current Stage: <strong>{stage}</strong></p>

      {/* The Plant Area */}
      <div style={{ 
        height: '200px', 
        display: 'flex', 
        alignItems: 'flex-end', 
        justifyContent: 'center',
        margin: '20px 0',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '20px'
      }}>
        <div style={{ fontSize: `${growth + 40}px`, transition: 'all 0.5s ease' }}>
          {growth < 40 ? '🌱' : growth < 80 ? '🌿' : '🌳'}
        </div>
      </div>

      <div className="controls" style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button className="kid-card bg-sun-yellow" onClick={() => growPlant('sun')}>☀️ Add Sun</button>
        <button className="kid-card bg-ocean-blue" onClick={() => growPlant('water')}>💧 Add Water</button>
      </div>

      {growth >= 100 && (
        <div style={{ marginTop: '20px' }} className="clay-glow">
          🎉 Great job, Scientist! You maximized photosynthesis!
        </div>
      )}
    </div>
  );
}