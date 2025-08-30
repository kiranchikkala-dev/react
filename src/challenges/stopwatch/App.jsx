import React, { useEffect, useRef, useState } from 'react';

const App = () => {
  const [minutes, setMinutes] = useState('00');
  const [hours, setHours] = useState('00');
  const [seconds, setSeconds] = useState('000');
  const timer = useRef(null);
  const handleStart = () => {
    timer = setInterval(() => {});
  };

  const handleReset = () => {};
  const handlePause = () => {};
  return (
    <div className=' flex flex-col mx-auto w-[100vw]'>
      <div>
        <span className=' '>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>pause</button>
        <button onClick={handleReset}>reset</button>
      </div>
    </div>
  );
};

export default App;
