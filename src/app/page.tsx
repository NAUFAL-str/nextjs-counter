"use client";

import { useEffect, useState } from "react";

const MIN_COUNT = 0;
const MAX_COUNT = 10;
const COUNTER_STORAGE_KEY = "simple-counter-value";

export default function Home() {
  const [count, setCount] = useState(MIN_COUNT);

  useEffect(() => {
    const storedValue = window.localStorage.getItem(COUNTER_STORAGE_KEY);
    if (storedValue === null) {
      return;
    }

    const parsedValue = Number.parseInt(storedValue, 10);
    if (Number.isNaN(parsedValue)) {
      return;
    }

    const clampedValue = Math.min(MAX_COUNT, Math.max(MIN_COUNT, parsedValue));
    setCount(clampedValue);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(COUNTER_STORAGE_KEY, String(count));
  }, [count]);

  return (
    <main className="container">
      <div className="card">
        <h1>Counter App</h1>
        <p className="value">{count}</p>

        <div className="buttons">
          <button
            type="button"
            onClick={() => setCount((current) => Math.max(MIN_COUNT, current - 1))}
          >
            -1
          </button>
          <button type="button" onClick={() => setCount(0)}>
            Reset
          </button>
          <button
            type="button"
            onClick={() => setCount((current) => Math.min(MAX_COUNT, current + 1))}
          >
            +1
          </button>
        </div>
      </div>
    </main>
  );
}
