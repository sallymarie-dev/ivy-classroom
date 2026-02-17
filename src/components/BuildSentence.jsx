import React, { useState, useEffect } from 'react';

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
    audio.play().catch((err) => console.log("Sound error:", err));
  };

  const handleChoiceClick = (word) => {
    if (isCorrect || !currentLevel) return;

    if (word === currentLevel.missing) {
      setSelectedWord(word);
      setIsCorrect(true);
      setScore(prev => prev + 1);
      
      // Updated to your file name: yay.mp3
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
    <div className="game-container" style={{ padding: '20px' }}>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '40px' 
      }}>
        <button className="nav-button" onClick={onBack} style={{ padding: '15px 25px' }}>
          ⬅ Back
        </button>

        <div className="kid-card clay-glow bg-grass-green" style={{ 
          padding: '10px 30px', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '15px',
          borderRadius: '50px',
          border: 'none'
        }}>
          <span style={{ fontSize: '40px' }}>🦒</span>
          <span style={{ fontSize: '30px', fontWeight: 'bold', color: 'white' }}>
            {score} / {gamePool.length}
          </span>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '60px', padding: '0px 20px' }}>
        <h2 style={{ fontSize: '40px', color: 'white', lineHeight: '1.6', margin: '0px' }}>
          {currentLevel.sentence}{" "}
          <span style={{ 
            borderBottom: '5px solid #FF595E', 
            padding: '0px 10px',
            color: '#8AC926',
            display: 'inline',
            marginLeft: '5px'
          }}>
            {isCorrect ? selectedWord : "__________"}
          </span>
        </h2>
      </div>

      <h3 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '30px', color: 'white' }}>
        Pick the right word:
      </h3>

      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {currentLevel.choices.map((word) => (
          <button 
            key={word}
            className="kid-card clay-glow bg-sun-yellow"
            onClick={() => handleChoiceClick(word)}
            style={{ 
              padding: '20px 40px', 
              cursor: 'pointer', 
              fontSize: '28px',
              borderRadius: '20px',
              border: 'none',
              color: '#333'
            }}
          >
            {word}
          </button>
        ))}
      </div>
    </div>
  );
}