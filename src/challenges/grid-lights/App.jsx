import React, { useCallback, useEffect, useState } from 'react';
import { useControls } from 'leva';
const App = () => {
  const [selections, setSelections] = useState([]);

  const { gridSize } = useControls({
    gridSize: { value: 3, min: 2, max: 4, step: 1 },
  });
  const total = gridSize * gridSize;
  const { delay } = useControls({
    delay: { value: 300, min: 100, max: 700, step: 100 },
  });
  const handleRemoveItem = useCallback(async () => {
    for (let i = selections.length - 1; i >= 0; i--) {
      await new Promise((res) => setTimeout(res, delay));
      setSelections(selections.slice(0, i));
    }
  }, [selections, delay]);
  useEffect(() => {
    if (selections.length === total) {
      handleRemoveItem();
    }
  }, [selections, handleRemoveItem, total]);
  const onCellClick = (e) => {
    const target = e.target;
    const row = Number(target.dataset.row);
    const col = Number(target.dataset.col);
    setSelections(selections.concat([[row, col]]));
  };

  return (
    <div className=' mx-auto w-[500px] bg-yellow-400 '>
      <div
        className=' gap-2  inline-grid'
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
        }}
      >
        {Array.from({ length: gridSize }, (_, row) =>
          Array.from({ length: gridSize }, (_, col) => {
            const isSelected = selections.some(
              (item) => item[0] === row && item[1] === col
            );
            return (
              <button
                className={`  w-[3rem] h-[3rem] ${
                  isSelected ? 'bg-green-300' : 'bg-red-400'
                }`}
                key={`${row}-${col}`}
                data-row={row}
                data-col={col}
                onClick={onCellClick}
                disabled={isSelected}
              ></button>
            );
          })
        )}
      </div>
    </div>
  );
};

export default App;
