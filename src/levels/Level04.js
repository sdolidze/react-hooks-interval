import React, { useEffect, useState } from 'react';

// cleanup
export default function Level04() {
  console.log('renderLevel04');

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect');
    const interval = setInterval(() => {
      console.log('setInterval');
      setCount(count + 1);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return <div>count => {count}</div>;
}
