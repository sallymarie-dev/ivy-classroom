import React from 'react';

export default function NavButton({ icon, label, color }) {
  return (
    <button 
      className="nav-pill" 
      style={{ backgroundColor: color }}
    >
      <span className="nav-icon">{icon}</span>
      <span className="nav-label">{label}</span>
    </button>
  );
}