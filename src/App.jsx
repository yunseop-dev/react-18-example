import useCSS from './hooks/useCSS';
import useTimeCSS from './hooks/useTimeCSS';
import { useEffect, useState, useInsertionEffect } from 'react';

export default function App() {
  const updateMode = useCSS();
  const [time, setTime] = useState(0);
  useTimeCSS(time);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  useEffect(() => {
    console.log('effect');
  }, []);

  useInsertionEffect(() => {
    console.log('insertion effect');
  }, []);

  return (
    <>
      <div className="time">{time}</div>
      <button onClick={() => setTime(1)}>Start</button>
      <button onClick={() => setTime(-1)}>Stop</button>

      <button onClick={updateMode}>
        color mode
      </button>

    </>
  );
}
