import React, { useState } from 'react';

// setInterval
export default function Level01() {
  console.log('renderLevel01');

  const [count, setCount] = useState(0);

  setInterval(() => {
    setCount(count + 1);
  }, 500);

  return <div>count => {count}</div>;
}
