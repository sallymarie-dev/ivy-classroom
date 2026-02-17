import React from 'react';

export default function ClassDojo({ onBack }) {
  return (
    <div className="classroom-body">
      <header className="header-nav">
        <h2 className="nav-title">ClassDojo 👾</h2>
        <div className="nav-button-group">
          <button className="nav-button" onClick={onBack} style={{backgroundColor: '#FF595E'}}>
            ⬅ Back
          </button>
        </div>
      </header>

      <div className="banner">
        <h1>Student Login <span>✨</span></h1>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px', marginTop: '40px' }}>
        
        {/* Login Section */}
        <div className="kid-card clay-glow bg-sun-yellow" style={{ width: '300px', height: 'auto', padding: '20px' }}>
          <p style={{ margin: 0, fontSize: '20px', color: '#333' }}>Your Class Code:</p>
          <h1 style={{ fontSize: '55px', margin: '10px 0', color: '#333' }}>BEQRWA</h1>
        </div>

        <a 
          href="https://dojo.me" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="kid-card clay-glow" 
          style={{ backgroundColor: '#00D1FF', textDecoration: 'none', width: '220px' }}
        >
          <span style={{ fontSize: '60px' }}>🚀</span>
          <h2 style={{ color: 'white' }}>Launch Dojo</h2>
        </a>

        <hr style={{ width: '80%', border: '1px solid rgba(255,255,255,0.2)', margin: '20px 0' }} />

        {/* PDF Section */}
        <h2 style={{ color: 'white' }}>Classroom Files 📂</h2>
        
        <a 
          href="/Friendship-Castle.pdf" 
          download="Friendship-Castle.pdf"
          className="kid-card clay-glow" 
          style={{ 
            backgroundColor: '#A06CD5', 
            textDecoration: 'none', 
            width: '220px', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center' 
          }}
        >
          <span style={{ fontSize: '60px' }}>🏰</span>
          <h2 style={{ color: 'white', fontSize: '18px', textAlign: 'center' }}>Friendship Castle</h2>
        </a>
      </div>
    </div>
  );
}