import React, { useEffect, useState } from 'react';

// setTimeout
export default function Level06() {
  console.log('renderLevel06');

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect');
    const timeout = setTimeout(() => {
      console.log('setTimeout');
      setCount(count + 1);
    }, 300);
    return () => clearTimeout(timeout);
  }, [count]);

  return <div>count => {count}</div>;
}
