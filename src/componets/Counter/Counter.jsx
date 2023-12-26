import { useState } from "react";
import styles from "./Counter.module.css";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className={styles.counterContainer}>
      <p className={styles.countDisplay}>Count: {count}</p>
      <button className={styles.counterButton} onClick={increment}>
        +
      </button>
      <button className={styles.counterButton} onClick={reset}>
        Reset
      </button>
      <button className={styles.counterButton} onClick={decrement}>
        -
      </button>
    </div>
  );
}

export default Counter;
