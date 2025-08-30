import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(1);
  const handleSub = () => {
    setCount((prev) => prev - value);
  };
  const handleAdd = () => {
    setCount((prev) => prev + value);
  };
  return (
    <div className=' flex justify-center items-center  flex-col'>
      <span className=' text-2xl'>{count}</span>
      <div className=' flex  items-center gap-1'>
        <button onClick={handleSub} className=' bg-red-300 p-3'>
          -
        </button>
        <button onClick={handleAdd} className=' bg-red-300 p-3'>
          +
        </button>
      </div>
      <input
        className=' border '
        type='number'
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <button
        onClick={() => {
          setCount(0);
          setValue(1);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default App;
