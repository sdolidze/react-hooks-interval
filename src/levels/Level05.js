import React, { useEffect, useState } from 'react';

// use count as deps
export default function Level05() {
  console.log('renderLevel05');

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 300);
    return () => clearInterval(interval);
  }, [count]);

  return <div>count => {count}</div>;
}
