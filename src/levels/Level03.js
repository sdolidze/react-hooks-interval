import React, { useEffect, useState } from 'react';

// run only once
export default function Level03() {
  console.log('renderLevel03');

  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 300);
  }, []);

  return <div>count => {count}</div>;
}
