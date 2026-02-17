
import React, { useState } from 'react';
import Dashboard from './Dashboard.jsx';
import GamePage from './GamePage.jsx';

export default function App() {
  const [view, setView] = useState('home');

  return (
    <>
      {view === 'home' && (
        <Dashboard onStartGame={() => setView('game')} />
      )}
      
      {view === 'game' && (
        <GamePage onBack={() => setView('home')} />
      )}
    </>
  );
}