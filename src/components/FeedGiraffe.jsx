import React, { useState } from 'react';

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

  const handleFeed = (itemName) => {
    if (dailyHunger < MAX_FOOD) {
      playSound('yay.mp3');
      setDailyHunger(prev => prev + 1);
      setTotalLeaves(prev => prev + 1);
    } else {
      playSound('error.mp3');
    }
  };

  return (
    <div className="game-container" style={{ padding: '20px', textAlign: 'center' }}>
      
      
      <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '30px' }}>
        <button className="nav-button" onClick={onBack} style={{ padding: '15px 25px' }}>
          ⬅ Back
        </button>
      </div>

    
      <div style={{ marginBottom: '20px' }}>
        <div style={{ 
          fontSize: '120px', 
          transition: 'transform 0.3s ease',
          transform: dailyHunger >= MAX_FOOD ? 'scale(1.2) rotate(5deg)' : 'scale(1)'
        }}>
          🦒
        </div>
      </div>

      <div style={{ 
        width: '350px', 
        height: '40px', 
        backgroundColor: 'rgba(255,255,255,0.2)', 
        borderRadius: '20px', 
        margin: '0px auto 40px auto',
        border: '4px solid white',
        overflow: 'hidden'
      }}>
        <div style={{ 
          width: `${(dailyHunger / MAX_FOOD) * 100}%`, 
          height: '100%', 
          backgroundColor: '#8AC926',
          transition: 'width 0.5s ease'
        }}></div>
      </div>

      
      <h3 style={{ color: 'white', fontSize: '24px', marginBottom: '20px' }}>
        {dailyHunger < MAX_FOOD ? "Choose something to feed Ivy:" : "Ivy is full and happy!"}
      </h3>

      <div style={{ 
        display: 'flex', 
        gap: '20px', 
        justifyContent: 'center', 
        flexWrap: 'wrap' 
      }}>
        {FOOD_ITEMS.map((item) => (
          <button 
            key={item.name}
            onClick={() => handleFeed(item.name)}
            disabled={dailyHunger >= MAX_FOOD}
            className={`kid-card clay-glow ${item.color}`}
            style={{ 
              width: '120px', 
              height: '140px', 
              cursor: dailyHunger >= MAX_FOOD ? 'not-allowed' : 'pointer',
              border: 'none',
              borderRadius: '25px',
              opacity: dailyHunger >= MAX_FOOD ? 0.3 : 1, 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}
          >
            <span style={{ fontSize: '50px' }}>{item.icon}</span>
            <span style={{ fontSize: '14px', fontWeight: 'bold', color: 'white' }}>{item.name}</span>
          </button>
        ))}
      </div>

     
      <div style={{ marginTop: '40px' }}>
        <p style={{ fontSize: '22px', color: '#FFCA3A', fontWeight: 'bold', marginBottom: '20px' }}>
          Total Rewards: {totalLeaves}
        </p>

       
       
        {dailyHunger >= MAX_FOOD && (
          <button 
            className="kid-card clay-glow bg-ocean-blue"
            onClick={onBack}
            style={{ 
              padding: '20px 40px', 
              fontSize: '24px', 
              color: 'white', 
              border: 'none', 
              borderRadius: '20px',
              cursor: 'pointer',
              animation: 'popIn 0.5s ease' 
            }}
          >
            🌟 Come Back Tomorrow!
          </button>
        )}
      </div>
    </div>
  );
}