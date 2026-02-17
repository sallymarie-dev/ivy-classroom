import React, { useState, useEffect } from 'react';
import '../styles/MathMatch.css';

const CARDS_DATA = [
  { id: 1, content: '2+2', match: '4' },
  { id: 2, content: '4', match: '2+2' },
  { id: 3, content: '5+1', match: '6' },
  { id: 4, content: '6', match: '5+1' },
  { id: 5, content: '3+2', match: '5' },
  { id: 6, content: '5', match: '3+2' },
  { id: 7, content: '1+1', match: '2' },
  { id: 8, content: '2', match: '1+1' }
];

export default function MathMatch({ onWin, onBack }) {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    const shuffled = [...CARDS_DATA].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  }, []);

  const playSound = (fileName) => {
    const audio = new Audio(`/${fileName}`);
    audio.play().catch(() => {});
  };

  const handleFlip = (index) => {
    if (flipped.length === 2 || matched.includes(index) || flipped.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const firstCard = cards[newFlipped[0]];
      const secondCard = cards[newFlipped[1]];

      if (firstCard.match === secondCard.content) {
        setMatched([...matched, newFlipped[0], newFlipped[1]]);
        setFlipped([]);
        playSound('yay.mp3');
        if (matched.length + 2 === cards.length) {
          setTimeout(onWin, 1000);
        }
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  return (
    <div className="math-container">
      <div className="math-header">
        <button className="nav-button" onClick={onBack}>⬅ Back</button>
        <div className="score-pill kid-card clay-glow bg-ocean-blue">
          <span style={{ color: 'white', fontWeight: 'bold' }}>
            Matches: {matched.length / 2}
          </span>
        </div>
      </div>

      <div className="card-grid">
        {cards.map((card, index) => {
          const isFlipped = flipped.includes(index) || matched.includes(index);
          const isMatched = matched.includes(index);

          return (
            <button
              key={index}
              onClick={() => handleFlip(index)}
              className={`math-card clay-glow ${isMatched ? 'matched' : isFlipped ? 'flipped' : 'hidden'}`}
            >
              {isFlipped ? card.content : '?'}
            </button>
          );
        })}
      </div>
    </div>
  );
}