import React, { useEffect, useState } from 'react';

// setTimeout
export default function Level06() {
  console.log('renderLevel06');

  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCount(count + 1);
    }, 300);
    return () => clearTimeout(timeout);
  }, [count]);

  return <div>count => {count}</div>;
}
