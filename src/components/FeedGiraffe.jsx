import React, { useState } from 'react';
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
  const MAX_FOOD = 5;

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
        <button className="nav-button" onClick={onBack}>⬅ Back</button>
      </div>

      <div className={`giraffe-display ${dailyHunger >= MAX_FOOD ? 'giraffe-happy' : ''}`}>
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