import React, {
  useState,
  useRef,
  useCallback,
} from 'react';

// custom hook
function useCounter(initalValue, ms) {
  const [count, setCount] = useState(initalValue);
  const intervalRef = useRef(null);

  const start = useCallback(() => {
    if (intervalRef.current !== null) {
      return;
    }

    intervalRef.current = setInterval(() => {
      setCount(c => c + 1);
    }, ms);
  }, []);

  const stop = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }

    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  return { count, start, stop, reset };
}

export default function Level10() {
  console.log('renderLevel10');

  const { count, start, stop, reset } = useCounter(0, 500);

  return (
    <div>
      count => {count}
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
