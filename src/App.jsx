import React from 'react';
import NavButton from './components/NavButton'; 
import './styles/Variables.css';
import './styles/Crayons.css';
import './styles/App.css';

export default function App() {
  return (
    <div className="classroom-body">
      {/* Top Navigation */}
      <header className="header-nav">
        <h2 className="nav-title">Ivy Classroom 🏫</h2>
        <div className="nav-button-group">
          <NavButton icon="🏠" label="Home" color="#FF595E" />
          <NavButton icon="🌟" label="Tasks" color="#8AC926" />
          <NavButton icon="🎨" label="Fun" color="#FFCA3A" />
        </div>
      </header>

      {/* Hero Banner */}
      <div className="banner">
        <h1>Good Morning, Class! <span>☀️</span></h1>
      </div>

      {/* Main Grid */}
      <div className="grid-container">
        <div className="kid-card clay-glow bg-apple-red">
          <span>🍎</span>
          <h2>Reading</h2>
        </div>
        
        <div className="kid-card clay-glow bg-sun-yellow">
          <span>🎨</span>
          <h2>Art Time</h2>
        </div>

        <div className="kid-card clay-glow bg-grass-green">
          <span>🌲</span>
          <h2>Recess</h2>
        </div>

        <div className="kid-card clay-glow bg-ocean-blue">
          <span>🔢</span>
          <h2>Math</h2>
        </div>

        <div className="kid-card clay-glow bg-purple">
          <span>🧪</span>
          <h2>Science</h2>
        </div>

        <div className="kid-card clay-glow bg-music-orange">
          <span>🎺</span>
          <h2>Music</h2>
        </div>
      </div>
    </div>
  );
}