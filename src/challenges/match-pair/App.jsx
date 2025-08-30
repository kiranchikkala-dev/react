import React, { useEffect } from 'react';
import { getRandomSymbols, symbols } from './utiles';
const App = () => {
  console.log(symbols[0]);
  useEffect(() => {
    getRandomSymbols();
  }, []);
  return <div></div>;
};

export default App;
