import React, { useState } from 'react';

// hello world
export default function Level00() {
  console.log('renderLevel00');

  const [count, setCount] = useState(0);

  return (
    <div>
      count => {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
