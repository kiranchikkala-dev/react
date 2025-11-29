import React, { useEffect, useState } from 'react';
const EMOJI_SETS = {
  easy: ['🍎', '🍌', '🍇', '🍓', '🍍', '🥝'],
  medium: ['🐶', '🐱', '🦊', '🐼', '🐨', '🐯', '🐵', '🐸'],
  hard: [
    '⚽',
    '🏀',
    '🏈',
    '🎾',
    '🎲',
    '🎯',
    '🥌',
    '🏒',
    '🥊',
    '🎳',
    '🏓',
    '⛳',
  ],
};

function shuffle(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
const App = () => {
  const [difficulty, setDifficulty] = useState('easy');
  const [cards, setCards] = useState([]);

  const [firstSelected, setFirstSelected] = useState(null);
  const [secondSelected, setSecondSelected] = useState(null);
  useEffect(() => {
    startGame();
  }, [difficulty]);
  const startGame = () => {
    const diffType = EMOJI_SETS[difficulty];
    const pairCount = diffType.length;
    const pairEmojis = diffType.slice(0, pairCount);

    const pairedArray = shuffle([...pairEmojis, ...pairEmojis]).map(
      (emoji, idx) => ({
        id: idx + '-' + emoji,
        emoji,
        flipped: false,
        matched: false,
      })
    );
    setCards(pairedArray);
    setSecondSelected(null);
    setFirstSelected(null);
  };
  useEffect(() => {
    if (firstSelected && secondSelected) {
      if (firstSelected?.emoji === secondSelected?.emoji) {
        setCards((prev) =>
          prev.map((item) =>
            item?.id === firstSelected?.id || item?.id === secondSelected?.id
              ? { ...item, matched: true }
              : { ...item }
          )
        );
        reset();
      } else {
        setTimeout(() => {
          reset();
        }, 1000);
      }
    }
  }, [secondSelected]);
  const reset = () => {
    setFirstSelected(null);
    setSecondSelected(null);
    setCards((prev) =>
      prev.map((item) => (item?.matched ? item : { ...item, flipped: false }))
    );
  };
  useEffect(() => {
    startGame();
  }, []);
  const handleCardClick = (item) => {
    setCards((prev) =>
      prev.map((i) => (i?.id === item?.id ? { ...i, flipped: true } : { ...i }))
    );
    if (!firstSelected) {
      setFirstSelected(item);
    } else if (!secondSelected) {
      setSecondSelected(item);
    }
  };
  return (
    <div>
      {console.log(cards)}

      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        className='px-3 py-1 rounded border'
      >
        <option value='easy'>Easy (6 pairs)</option>
        <option value='medium'>Medium (8 pairs)</option>
        <option value='hard'>Hard (12 pairs)</option>
      </select>

      <div
        className={`grid  w-[700px]  gap-4 ${
          difficulty === 'easy'
            ? 'grid-cols-3'
            : difficulty === 'medium'
            ? 'grid-cols-4'
            : 'grid-cols-6'
        }`}
      >
        {cards.map((item) => {
          return (
            <div
              key={item.id}
              className={`aspect-square rounded-lg shadow-md transform transition-transform duration-300 relative flex items-center justify-center text-3xl select-none focus:outline-none ${
                item.flipped || item.matched
                  ? 'bg-white scale-100'
                  : 'bg-slate-700 hover:scale-105'
              }`}
              onClick={() => handleCardClick(item)}
            >
              {item?.flipped ? item.emoji : '?'}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
