import React, { useState, useEffect } from 'react';
import '../styles/BuildSentence.css';

const ALL_SENTENCES = [
  { sentence: "The big giraffe ate a green", missing: "leaf", choices: ["leaf", "pizza", "car"] },
  { sentence: "A fast rocket flew to the", missing: "moon", choices: ["moon", "store", "park"] },
  { sentence: "The playful puppy barked at the", missing: "ball", choices: ["tree", "ball", "shoe"] },
  { sentence: "I use my umbrella when it is", missing: "raining", choices: ["sunny", "snowing", "raining"] },
  { sentence: "The buzzing bee made some", missing: "honey", choices: ["milk", "honey", "juice"] },
  { sentence: "A cold snowman has a carrot", missing: "nose", choices: ["hat", "nose", "arm"] },
  { sentence: "The red apple fell from the", missing: "tree", choices: ["tree", "sky", "cloud"] },
  { sentence: "I wear my warm coat in the", missing: "winter", choices: ["pool", "beach", "winter"] },
  { sentence: "The little fish swims in the", missing: "ocean", choices: ["ocean", "forest", "desert"] },
  { sentence: "A big yellow bus takes me to", missing: "school", choices: ["bed", "school", "the moon"] },
  { sentence: "The stars shine bright in the", missing: "night", choices: ["morning", "night", "noon"] },
  { sentence: "I brush my white teeth with a", missing: "toothbrush", choices: ["fork", "toothbrush", "spoon"] },
  { sentence: "The spider spun a sticky", missing: "web", choices: ["web", "house", "nest"] },
  { sentence: "A green frog likes to", missing: "jump", choices: ["jump", "fly", "sing"] },
  { sentence: "The baker made a yummy chocolate", missing: "cake", choices: ["cake", "shoe", "book"] },
  { sentence: "I see a colorful rainbow after the", missing: "rain", choices: ["rain", "dark", "nap"] },
  { sentence: "The cow says moo and gives us", missing: "milk", choices: ["milk", "eggs", "apples"] },
  { sentence: "A fluffy cat likes to drink", missing: "milk", choices: ["milk", "coffee", "soda"] },
  { sentence: "The king wears a gold", missing: "crown", choices: ["crown", "sock", "shirt"] },
  { sentence: "I read a very good", missing: "book", choices: ["book", "chair", "lamp"] }
];

export default function BuildSentence({ onWin, onBack }) {
  const [gamePool, setGamePool] = useState([]);
  const [levelIndex, setLevelIndex] = useState(0);
  const [selectedWord, setSelectedWord] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const shuffled = [...ALL_SENTENCES].sort(() => Math.random() - 0.5).slice(0, 5);
    setGamePool(shuffled);
  }, []);

  const currentLevel = gamePool[levelIndex];

  const playSound = (fileName) => {
    const audio = new Audio(`/${fileName}`);
    audio.play().catch((err) => {});
  };

  const handleChoiceClick = (word) => {
    if (isCorrect || !currentLevel) return;

    if (word === currentLevel.missing) {
      setSelectedWord(word);
      setIsCorrect(true);
      setScore(prev => prev + 1);
      playSound('yay.mp3');

      setTimeout(() => {
        if (levelIndex < gamePool.length - 1) {
          setLevelIndex(levelIndex + 1);
          setSelectedWord(null);
          setIsCorrect(false);
        } else {
          onWin(); 
        }
      }, 2500); 
    } else {
      playSound('error.mp3');
    }
  };

  if (gamePool.length === 0) return null;

  return (
    <div className="game-container">
      <div className="sentence-header">
        <button className="nav-button" onClick={onBack}>⬅ Back</button>
        <div className="score-pill kid-card clay-glow bg-grass-green">
          <span style={{ fontSize: '30px' }}>🦒</span>
          <span style={{ fontSize: '22px', fontWeight: 'bold', color: 'white' }}>
            {score}/{gamePool.length}
          </span>
        </div>
      </div>

      <div className="sentence-display">
        <h2>
          {currentLevel.sentence}{" "}
          <span className="missing-word-slot">
            {isCorrect ? selectedWord : "____"}
          </span>
        </h2>
      </div>

      <h3 style={{ color: 'white', marginBottom: '20px' }}>Pick the right word:</h3>

      <div className="choice-grid">
        {currentLevel.choices.map((word) => (
          <button 
            key={word}
            className="choice-button kid-card clay-glow bg-sun-yellow"
            onClick={() => handleChoiceClick(word)}
          >
            {word}
          </button>
        ))}
      </div>
    </div>
  );
}