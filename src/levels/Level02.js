import React, { useEffect, useState } from 'react';

// useEffect
export default function Level02() {
  console.log('renderLevel02');

  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => setCount(count + 1));
  });

  return <div>Level 2: count => {count}</div>;
}
