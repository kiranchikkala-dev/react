import React from 'react';

const CoreAccordion = ({ data, handleClick }) => {
  const { title, info, isOpen } = data;

  return (
    <div
      className=' border p-4 flex items-start
     justify-between'
    >
      <div className=' flex flex-col'>
        <div>
          <h3>{title}</h3>
        </div>
        {isOpen && (
          <div>
            <div>{info}</div>
          </div>
        )}
      </div>
      {
        <span
          className=' rounded-2xl p-3 bg-gray-300'
          onClick={() => handleClick(data)}
        >
          {isOpen ? <span>-</span> : <span>+</span>}
        </span>
      }
    </div>
  );
};

export default CoreAccordion;
