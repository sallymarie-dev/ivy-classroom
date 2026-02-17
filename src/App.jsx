import React, { useState } from 'react';
import Dashboard from './Dashboard';
import GamePage from './GamePage'; // Added this
import ClassDojo from './components/ClassDojo'; // Added this

export default function App() {
  const [view, setView] = useState({ page: 'home', type: null });

  const handleNavigation = (type, page = 'game') => {
    setView({ page: page, type: type });
  };

  return (
    <>
      {view.page === 'home' && (
        <Dashboard onStartGame={handleNavigation} />
      )}
      
      {view.page === 'game' && (
        <GamePage 
          gameType={view.type} 
          onBack={() => setView({ page: 'home', type: null })} 
        />
      )}

      {view.page === 'dojo' && (
        <ClassDojo onBack={() => setView({ page: 'home', type: null })} />
      )}
    </>
  );
}