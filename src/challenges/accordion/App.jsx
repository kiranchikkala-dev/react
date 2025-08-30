import React, { useState } from 'react';
import questions from './data';
import CoreAccordion from './CoreAccordion';

const App = () => {
  const [questionsData, setQuestionsData] = useState(questions);
  const [multipleChecked, setMultipleChecked] = useState(false);
  console.log('🚀 ~ App ~ multipleChecked:', multipleChecked);
  const handleClick = (item) => {
    if (multipleChecked) {
      setQuestionsData((prev) =>
        prev.map((i) =>
          i?.id === item?.id ? { ...i, isOpen: !i.isOpen } : { ...i }
        )
      );
    } else {
      setQuestionsData((prev) =>
        prev.map((i) =>
          i?.id === item?.id
            ? { ...i, isOpen: !i.isOpen }
            : { ...i, isOpen: false }
        )
      );
    }
  };
  const handleOnchange = () => {
    setMultipleChecked(!multipleChecked);
    setQuestionsData(questions);
  };
  return (
    <div className=' w-full flex flex-col gap-2 m-4'>
      <span>
        Is multiple open accordion allowed?
        <input
          type='checkbox'
          value={multipleChecked}
          onChange={handleOnchange}
        />
      </span>
      {questionsData.map((item) => {
        return (
          <div className=' w-full' key={item?.id}>
            <CoreAccordion data={item} handleClick={handleClick} />
          </div>
        );
      })}
    </div>
  );
};

export default App;
