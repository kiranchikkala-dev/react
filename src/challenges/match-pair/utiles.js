export const symbols = [
  '🍇',
  '🍉',
  '🚗',
  '🍌',
  '🏠',
  '🥭',
  '🍎',
  '🐯',
  '🍒',
  '🍓',
  '🐵',
  '🥝',
  '🍿',
  '🏀',
  '🎱',
  '🐻',
  '🍜',
  '🍢',
  '🎓',
  '🍤',
  '🦀',
  '🍦',
  '🍩',
  '🎂',
  '🍫',
  '🍭',
  '🍼',
  '🪔',
  '🍺',
  '🐱',
  '🐶',
];

export const getRandomSymbols = (n = 8, shouldBeUnique = true) => {
  const mySymbols = [];
  const set = new Set();

  for (let i = 0; i < n; i++) {
    const randomPos = Math.floor(Math.random() * symbols.length);
    if (shouldBeUnique && set.has(randomPos)) {
      continue;
    }

    mySymbols.push(symbols[randomPos]);
    set.add(randomPos);
  }
  console.log(mySymbols);

  return mySymbols;
};
