import React, {
  useState,
  useRef,
  useCallback,
} from 'react';

// useCallback
export default function Level09() {
  console.log('renderLevel09');

  const [count, setCount] = useState(0);

  const intervalRef = useRef(null);

  const start = useCallback(() => {
    if (intervalRef.current !== null) {
      return;
    }

    intervalRef.current = setInterval(() => {
      setCount(c => c + 1);
    }, 500);
  });

  const stop = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }

    clearInterval(intervalRef.current);
  });

  return (
    <div>
      count => {count}
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
    </div>
  );
}
