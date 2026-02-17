import React from 'react';
import NavButton from './components/NavButton'; 
import './styles/Variables.css';
import './styles/Crayons.css';
import './styles/App.css';

export default function Dashboard({ onStartGame }) {
  
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
            onClick={() => onStartGame(null, 'game')} 
          />
        </div>
      </header>

      <div className="banner">
        <h1>Good Morning, Class! <span>☀️</span></h1>
      </div>

      <div className="grid-container">
        {/* Reading */}
        <div className="kid-card clay-glow bg-apple-red" onClick={() => onStartGame('reading', 'game')}>
          <span>🍎</span>
          <h2>Reading</h2>
        </div>
        
        {/* Art Time */}
        <div className="kid-card clay-glow bg-sun-yellow">
          <span>🎨</span>
          <h2>Art Time</h2>
        </div>
        
        {/* Recess / Feed Ivy */}
        <div className="kid-card clay-glow bg-grass-green" onClick={() => onStartGame('feed', 'game')}>
          <span>🦒</span>
          <h2>Recess</h2>
        </div>
        
        {/* Math */}
        <div className="kid-card clay-glow bg-ocean-blue" onClick={() => onStartGame('math', 'game')}>
          <span>🔢</span>
          <h2>Math</h2>
        </div>

        {/* Science */}
        <div className="kid-card clay-glow bg-purple">
          <span>🧪</span>
          <h2>Science</h2>
        </div>

        {/* Music */}
        <div className="kid-card clay-glow bg-music-orange">
          <span>🎺</span>
          <h2>Music</h2>
        </div>

        {/* ClassDojo */}
        <div 
          className="kid-card clay-glow" 
          style={{ backgroundColor: '#00D1FF', cursor: 'pointer' }} 
          onClick={() => onStartGame(null, 'dojo')}
        >
          <span style={{ filter: 'hue-rotate(90deg)' }}>👾</span>
          <h2>ClassDojo</h2>
        </div>
      </div>
    </div>
  );
}