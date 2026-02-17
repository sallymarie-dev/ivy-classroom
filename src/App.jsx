
import React, { useState } from 'react';
import Dashboard from './Dashboard.jsx';
import GamePage from './GamePage.jsx';

export default function App() {

const [view, setView] = useState({ page: 'home', type: null });

return (
  <>
    {view.page === 'home' && (
      <Dashboard onStartGame={(type) => setView({ page: 'game', type: type })} />
    )}
    
    {view.page === 'game' && (
      <GamePage 
        gameType={view.type} 
        onBack={() => setView({ page: 'home', type: null })} 
      />
    )}
  </>
)};