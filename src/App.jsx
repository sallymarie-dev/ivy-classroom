import React, { useState } from 'react';
import Dashboard from './Dashboard';
import GamePage from './GamePage';
import ClassDojo from './components/ClassDojo';
import ReadingPage from './components/ReadingPage'; 
import BuildSentence from './components/BuildSentence';
import MathPage from './components/MathPage';
import MathMatch from './components/MathMatch';

export default function App() {
  const [view, setView] = useState({ page: 'home', type: null });

  const handleNavigation = (type, page = 'game') => {
    setView({ page: page, type: type });
  };

  const goToHome = () => setView({ page: 'home', type: null });
  const goToReading = () => setView({ page: 'reading-hub', type: null });

const goToMath = () => setView({ page: 'math-hub', type: null });

  return (
    <>
      {/* Show Dashboard */}
      {view.page === 'home' && (
        <Dashboard onStartGame={handleNavigation} />
      )}
      
      {/* Show Reading Hub */}
      {view.page === 'reading-hub' && (
        <ReadingPage 
          onBack={goToHome} 
          onStartGame={handleNavigation} 
        />
      )}

      {/* NEW: Direct link to BuildSentence Game */}
      {view.page === 'build-sentence' && (
        <BuildSentence 
          onBack={goToReading} 
          onWin={() => console.log("Won!")} 
        />
      )}

      {/* Show Game Center (Math/Science) */}
      {view.page === 'game' && (
        <GamePage 
          gameType={view.type} 
          onBack={goToHome} 
        />
      )}
{view.page === 'math-hub' && (
  <MathPage 
    onBack={goToHome} 
    onStartGame={handleNavigation} 
  />
)}

{view.page === 'math-match' && (
  <MathMatch 
    onBack={goToMath} 
    onWin={() => console.log("Math Master!")} 
  />
)}

      {/* Show ClassDojo Page */}
      {view.page === 'dojo' && (
        <ClassDojo onBack={goToHome} />
      )}
    </>
  );
}