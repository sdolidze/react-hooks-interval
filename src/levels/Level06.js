import React, { useEffect, useState } from 'react';

// Functional updates for useState
export default function Level06() {
  console.log('renderLevel06');

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect');
    const interval = setInterval(() => {
      console.log('setInterval');
      setCount(c => c + 1);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return <div>count => {count}</div>;
}
