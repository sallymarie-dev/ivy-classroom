import React from 'react';
import NavButton from './components/NavButton'; 
import './styles/Variables.css';
import './styles/Crayons.css';
import './styles/App.css';

export default function Dashboard({ onStartGame, setView }) {
  const openDojo = () => {
    window.open('https://home.classdojo.com', '_blank');
  };

  return (
    <div className="classroom-body">
      
      <header className="header-nav">
        <h2 className="nav-title">Ivy Classroom 🏫</h2>
        <div className="nav-button-group">
          <NavButton icon="🏠" label="Home" color="#FF595E" />
          <NavButton icon="🌟" label="Tasks" color="#8AC926" />
          <NavButton 
            icon="🎨" 
            label="Fun" 
            color="#FFCA3A" 
            onClick={onStartGame} 
          />
        </div>
      </header>

      <div className="banner">
        <h1>Good Morning, Class! <span>☀️</span></h1>
      </div>

      <div className="grid-container">
        <div className="kid-card clay-glow bg-apple-red" onClick={() => setView('reading')}>
          <span>🍎</span>
          <h2>Reading</h2>
        </div>
        
        <div className="kid-card clay-glow bg-sun-yellow">
          <span>🎨</span>
          <h2>Art Time</h2>
        </div>
        
        <div className="kid-card clay-glow bg-grass-green" onClick={() => setView('feed')}>
          <span>🦒</span>
          <h2>Feed Ivy</h2>
        </div>
        
        <div className="kid-card clay-glow bg-ocean-blue" onClick={() => setView('math')}>
          <span>🔢</span>
          <h2>Math</h2>
        </div>

        <div className="kid-card clay-glow" style={{ backgroundColor: '#00D1FF' }} onClick={openDojo}>
          <span>👹</span>
          <h2>ClassDojo</h2>
        </div>

        <div className="kid-card clay-glow bg-music-orange">
          <span>🎺</span>
          <h2>Music</h2>
        </div>
      </div>
    </div>
  );
}