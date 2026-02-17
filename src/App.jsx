import React, { useState } from 'react';
import Dashboard from './Dashboard';
import GamePage from './GamePage';
import ClassDojo from './components/ClassDojo';
import ReadingPage from './components/ReadingPage'; 
import BuildSentence from './components/BuildSentence';
import MathPage from './components/MathPage';
import MathMatch from './components/MathMatch';
import SciencePage from './components/SciencePage';

export default function App() {
  const [view, setView] = useState({ page: 'home', type: null });

  const handleNavigation = (type, page = 'game') => {
    setView({ page: page, type: type });
  };

  const goToHome = () => setView({ page: 'home', type: null });
  const goToReading = () => setView({ page: 'reading-hub', type: null });

const goToMath = () => setView({ page: 'math-hub', type: null });
const goToScience = () => setView({ page: 'science-hub', type: null });

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

      
      {view.page === 'build-sentence' && (
        <BuildSentence 
          onBack={goToReading} 
          onWin={() => console.log("Won!")} 
        />
      )}

      
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
{view.page === 'science-hub' && (
        <SciencePage 
          onBack={goToHome} 
          onStartGame={handleNavigation} 
        />
      )}

      {/* Show ClassDojo Page */}
      {view.page === 'dojo' && (
        <ClassDojo onBack={goToHome} />
      )}
    </>
  );
}