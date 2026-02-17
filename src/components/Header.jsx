import React from 'react';
import '../styles/Variables.css';
import '../styles/Header.css';

export default function Header() {
  return (
    <nav className="kinder-nav" style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '10px 20px',
      flexWrap: 'nowrap'
    }}>
      <div className="nav-title" style={{ fontSize: '24px' }}>Ivy Classroom 🏫</div>
      
      <div className="nav-button-group" style={{ 
        display: 'flex', 
        gap: '10px' 
      }}>
        <button className="kid-nav-btn" style={{ 
          backgroundColor: 'var(--kinder-red)',
          width: '60px',
          height: '60px',
          borderRadius: '15px',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <span style={{ fontSize: '30px' }}>🏠</span>
        </button>
        <button className="kid-nav-btn" style={{ 
          backgroundColor: 'var(--kinder-green)',
          width: '60px',
          height: '60px',
          borderRadius: '15px',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <span style={{ fontSize: '30px' }}>🌟</span>
        </button>
      </div>
    </nav>
  );
}