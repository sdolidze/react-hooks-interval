import React, { useState } from 'react';

// local variable
export default function Level08() {
  console.log('renderLevel08');

  const [count, setCount] = useState(0);

  let interval = null;

  const start = () => {
    interval = setInterval(() => {
      setCount(c => c + 1);
    }, 500);
  };

  const stop = () => {
    clearInterval(interval);
  };

  return (
    <div>
      count => {count}
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
    </div>
  );
}
