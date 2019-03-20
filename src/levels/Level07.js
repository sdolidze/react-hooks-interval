import React, { useState, useRef } from 'react';

// useRef
export default function Level07() {
  console.log('renderLevel07');

  const [count, setCount] = useState(0);

  const intervalRef = useRef(null);

  const start = () => {
    intervalRef.current = setInterval(() => {
      setCount(c => c + 1);
    }, 500);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      count => {count}
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
    </div>
  );
}
