import React, { useState } from 'react';
import MathMatch from './components/MathMatch';
import BuildSentence from './components/BuildSentence';
import FeedGiraffe from './components/FeedGiraffe';
import ScienceGame from './components/ScienceGame';
import ArtGame from './components/ArtGame';

export default function GamePage({ onBack }) {
    const [activeGame, setActiveGame] = useState(null);
    const [hasWon, setHasWon] = useState(false);


    if (activeGame === 'math') return <MathMatch onWin={() => setHasWon(true)} onBack={() => setActiveGame(null)} />;
    if (activeGame === 'reading') return <BuildSentence onWin={() => setHasWon(true)} onBack={() => setActiveGame(null)} />;
    if (activeGame === 'feed') return <FeedGiraffe onBack={() => setActiveGame(null)} />;
    if (activeGame === 'science-lab') return <ScienceGame onWin={() => setHasWon(true)} onBack={() => setActiveGame(null)} />;
if (activeGame === 'art') return <ArtGame onWin={() => setHasWon(true)} onBack={() => setActiveGame(null)} />;

    return (
        <div className="classroom-body">
            <header className="header-nav">
                <h2 className="nav-title">Game Center 🎮</h2>
                <div className="nav-button-group">
                    <button className="nav-button" onClick={onBack} style={{ backgroundColor: '#FF595E' }}>
                        ⬅ Back
                    </button>
                </div>
            </header>

            <div className="banner">
                <h1>Pick a Game! <span>✨</span></h1>
            </div>


            <div className="grid-container">
                <div className="kid-card clay-glow bg-ocean-blue" onClick={() => setActiveGame('math')}>
                    <span>🔢</span>
                    <h2>Math Match</h2>
                </div>

                <div className="kid-card clay-glow bg-apple-red" onClick={() => setActiveGame('reading')}>
                    <span>📚</span>
                    <h2>Sentence Build</h2>
                </div>

                <div className="kid-card clay-glow bg-purple" onClick={() => setActiveGame('science-lab')}>
                    <span>🧪</span>
                    <h2>Science Lab</h2>
                </div>

                <div className="kid-card clay-glow bg-grass-green" onClick={() => setActiveGame('science')}>
                    <span>🦒</span>
                    <h2>Feed Giraffe</h2>
                </div>
            </div>
<div className="kid-card clay-glow bg-sun-yellow" onClick={() => setActiveGame('art')}>
          <span>🎨</span>
          <h2>Art Time</h2>
        </div>

            {hasWon && (
                <div className="win-modal">

                    <div className="modal-content">
                        <h2>You Won! 🏆</h2>
                        <button onClick={() => setHasWon(false)}>Play Again</button>
                    </div>
                </div>
            )}
        </div>
    );
}