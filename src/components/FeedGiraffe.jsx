import React, { useState, useEffect } from 'react';
import '../styles/FeedGiraffe.css';

const FOOD_ITEMS = [
  { icon: "🌿", name: "Acacia Leaf", color: "bg-grass-green" },
  { icon: "🌱", name: "Acacia Shoot", color: "bg-ocean-blue" },
  { icon: "🍎", name: "Fruit", color: "bg-apple-red" },
  { icon: "🌸", name: "Flower", color: "bg-sun-yellow" }
];

export default function FeedGiraffe({ onBack }) {
  const [dailyHunger, setDailyHunger] = useState(0);
  const [totalLeaves, setTotalLeaves] = useState(0);
  const [positionX, setPositionX] = useState(50); // Start in the middle (50%)
  const MAX_FOOD = 5;

  // Handle keyboard movement
  useEffect(() => {
    const handleKeyDown = (e) => {
      const step = 5; // How many pixels/percent to move per click
      if (e.key === 'ArrowLeft') {
        setPositionX(prev => Math.max(0, prev - step)); // Boundary check (left)
      } else if (e.key === 'ArrowRight') {
        setPositionX(prev => Math.min(100, prev + step)); // Boundary check (right)
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const playSound = (fileName) => {
    const audio = new Audio(`/${fileName}`);
    audio.play().catch(() => {});
  };

  const handleFeed = () => {
    if (dailyHunger < MAX_FOOD) {
      playSound('yay.mp3');
      setDailyHunger(prev => prev + 1);
      setTotalLeaves(prev => prev + 1);
    } else {
      playSound('error.mp3');
    }
  };

  return (
    <div className="feed-container">
      <div className="feed-header">
        <button className="nav-button" onClick={onBack}>⬅️ Back</button>
      </div>

      {/* Giraffe Display with dynamic movement */}
      <div 
        className={`giraffe-display ${dailyHunger >= MAX_FOOD ? 'giraffe-happy' : ''}`}
        style={{ 
          left: `${positionX}%`, 
          transform: `translateX(-50%)`, // Centers the giraffe on its position
          position: 'relative',
          transition: 'left 0.1s ease-out', // Smooth movement
          fontSize: '80px' 
        }}
      >
        🦒
      </div>

      <div className="hunger-bar-bg">
        <div 
          className="hunger-bar-fill" 
          style={{ width: `${(dailyHunger / MAX_FOOD) * 100}%` }}
        ></div>
      </div>

      <h3 style={{ color: 'white', fontSize: '20px', marginBottom: '20px' }}>
        {dailyHunger < MAX_FOOD ? "Choose something to feed Ivy:" : "Ivy is full and happy!"}
      </h3>

      <div className="food-grid">
        {FOOD_ITEMS.map((item) => (
          <button 
            key={item.name}
            onClick={handleFeed}
            disabled={dailyHunger >= MAX_FOOD}
            className={`food-card kid-card clay-glow ${item.color}`}
          >
            <span style={{ fontSize: '40px' }}>{item.icon}</span>
            <span style={{ fontSize: '12px', fontWeight: 'bold', color: 'white' }}>{item.name}</span>
          </button>
        ))}
      </div>

      <div style={{ marginTop: '30px' }}>
        <p className="reward-text">Total Rewards: {totalLeaves}</p>

        {dailyHunger >= MAX_FOOD && (
          <button 
            className="tomorrow-btn kid-card clay-glow bg-ocean-blue"
            onClick={onBack}
          >
            🌟 Come Back Tomorrow!
          </button>
        )}
      </div>
    </div>
  );
}