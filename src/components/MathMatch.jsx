import React, { useState, useEffect } from 'react';


const PROBLEM_POOL = [
    { content: "10 + 5", matchId: "A", answer: "15" },
    { content: "8 + 2", matchId: "B", answer: "10" },
    { content: "20 - 5", matchId: "C", answer: "15" },
    { content: "3 Tens", matchId: "D", answer: "30" },
    { content: "5 + 5 + 5", matchId: "E", answer: "15" },
    { content: "12 + 4", matchId: "F", answer: "16" },
    { content: "Double 6", matchId: "G", answer: "12" },
    { content: "10 - 7", matchId: "H", answer: "3" },
    { content: "50 + 50", matchId: "I", answer: "100" },
    { content: "100 - 1", matchId: "J", answer: "99" }
];

export default function MathMatch({ onWin, onBack }) {
    const [cards, setCards] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [solved, setSolved] = useState([]);


    const startNewLevel = () => {

        const selectedProblems = [...PROBLEM_POOL]
            .sort(() => Math.random() - 0.5)
            .slice(0, 4);


        const newCards = [];
        selectedProblems.forEach((prob, index) => {

            newCards.push({
                id: `eq-${index}`,
                content: prob.content,
                matchId: `match-${index}`
            });

            newCards.push({
                id: `ans-${index}`,
                content: prob.answer,
                matchId: `match-${index}`
            });
        });


        setCards(newCards.sort(() => Math.random() - 0.5));
        setSolved([]);
        setFlipped([]);
    };

    useEffect(() => {
        startNewLevel();
    }, []);



    const playSound = (fileName) => {
        const audio = new Audio(`/${fileName}`);
        audio.play().catch(() => { });
    };

    const handleCardClick = (card) => {
        if (flipped.length === 2 || solved.includes(card.id) || flipped.includes(card)) return;

        playSound('pop.mp3');
        const newFlipped = [...flipped, card];
        setFlipped(newFlipped);

        if (newFlipped.length === 2) {
            if (newFlipped[0].matchId === newFlipped[1].matchId) {
                setTimeout(() => playSound('correct.mp3'), 300);
                setSolved([...solved, newFlipped[0].id, newFlipped[1].id]);
                setFlipped([]);
            } else {
                setTimeout(() => playSound('error.mp3'), 300);
                setTimeout(() => setFlipped([]), 1000);
            }
        }
    };

    useEffect(() => {
        if (solved.length === cards.length && cards.length > 0) {
            onWin();
        }
    }, [solved, onWin, cards.length]);

    return (
        <div className="game-container">
            <div className="game-header" style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                <button className="nav-button" onClick={onBack}>⬅ Back</button>
                <button
                    className="kid-card clay-glow bg-sun-yellow"
                    onClick={startNewLevel}
                    style={{ flex: 1, padding: '15px', fontSize: '1.2rem', cursor: 'pointer', border: 'none' }}
                >
                    🔄 Next Level (New Problems!)
                </button>
            </div>

            <div className="grid-container">
                {cards.map((card) => {
                    const isFlipped = flipped.includes(card) || solved.includes(card.id);
                    return (
                        <div
                            key={card.id}
                            className={`kid-card clay-glow ${isFlipped ? 'bg-grass-green' : 'bg-ocean-blue'}`}
                            onClick={() => handleCardClick(card)}
                            style={{ minHeight: '120px', cursor: 'pointer' }}
                        >
                            <h2 style={{ fontSize: '2rem' }}>
                                {isFlipped ? card.content : "❓"}
                            </h2>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}