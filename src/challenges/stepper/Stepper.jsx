import React from 'react';
import { useState } from 'react';
import styles from './App.module.css';

const Stepper = ({ steps }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const ActiveCompo = steps[currentIndex - 1]?.Component;

  const handleClickNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };
  const hadleClickPrevious = () => {
    setCurrentIndex((prev) => prev - 1);
  };
  return (
    <div className={styles.stepper}>
      {steps.map((step, index) => {
        return (
          <div
            key={step.name}
            className={`${styles.step} ${
              currentIndex === index + 1 ? styles.active : ''
            } ${
              currentIndex > index + 1 || isCompleted ? styles.complete : ''
            }`}
          >
            <div
              className={styles['step-number']}
              onClick={() => handleClick(index + 1)}
            >
              {currentIndex > index + 1 || isCompleted ? (
                <span>&#10003;</span>
              ) : (
                index + 1
              )}
            </div>

            <div className={styles['step-name']}>{step.name}</div>
          </div>
        );
      })}
      <ActiveCompo />
      <div>
        <button onClick={hadleClickPrevious}>previous</button>
        <button onClick={handleClickNext}>Next</button>
      </div>
    </div>
  );
};

export default Stepper;
