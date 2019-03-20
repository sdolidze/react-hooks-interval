import React, { useState, useRef } from 'react';

// handle multiple calls
export default function Level08() {
  console.log('renderLevel08');

  const [count, setCount] = useState(0);

  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current !== null) {
      return;
    }

    intervalRef.current = setInterval(() => {
      setCount(c => c + 1);
    }, 500);
  };

  const stop = () => {
    if (intervalRef.current === null) {
      return;
    }

    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div>
      count => {count}
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
    </div>
  );
}
