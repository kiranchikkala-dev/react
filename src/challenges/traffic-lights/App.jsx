import React, { useEffect, useState } from 'react';
import traffic_signals from './config';

const App = () => {
  const [currentActiveLight, setCurrentActiveLight] = useState('red');
  const [duration, setDuration] = useState(
    traffic_signals[currentActiveLight].duration
  );
  useEffect(() => {
    let timerId;
    console.log('render');

    if (duration <= 0) {
      clearInterval(timerId);
      setCurrentActiveLight(traffic_signals[currentActiveLight].next);
      setDuration(
        traffic_signals[traffic_signals[currentActiveLight].next].duration
      );
    } else {
      timerId = setInterval(() => {
        setDuration((preDur) => preDur - 1000);
      }, 1000);
    }
    return () => {
      console.log('clean up');

      clearInterval(timerId);
    };
  }, [duration]);

  return (
    <div className=' '>
      {Object.keys(traffic_signals).map((item) => {
        return (
          <div
            key={traffic_signals[item].id}
            className=' w-[5rem] h-[5rem]  bg-gray-300 rounded-4xl'
            style={{ background: currentActiveLight === item ? item : '' }}
          ></div>
        );
      })}
      {Math.floor(duration / 1000)} Seconds
    </div>
  );
};

export default App;
