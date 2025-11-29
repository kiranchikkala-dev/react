import React, { useState } from 'react';
import './counter.css';
const App = () => {
  const [count, setCount] = useState(0);
  const [range, setRange] = useState(1);
  const [value, setValue] = useState(1);
  const handleIncrement = () => {
    setCount((prev) => prev + value);
  };
  const handleDecrement = () => {
    setCount((prev) => prev - value);
  };
  const handleAsyncPlus = () => {
    setTimeout(() => {
      handleIncrement();
    }, range * 1000);
  };
  const handleAsyncMinus = () => {
    setTimeout(() => {
      handleDecrement();
    }, range * 1000);
  };
  return (
    <div className=' w-[900px] mx-auto gap-1.5  flex flex-col items-center'>
      <span>{count}</span>
      <br />
      <div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>{' '}
      <div>
        <button onClick={handleAsyncPlus}>Async +</button>
        <button onClick={handleAsyncMinus}>Async -</button>
      </div>
      <div>
        <input
          type='range'
          value={range}
          max={3}
          min={1}
          onChange={(val) => setRange(val.target.value)}
        />
        {`${range} S`}
      </div>
      <div>
        <label htmlFor=''>
          Increment/Decrement by
          <input
            className=' border p-2'
            type='number'
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />
        </label>
      </div>
    </div>
  );
};

export default App;
