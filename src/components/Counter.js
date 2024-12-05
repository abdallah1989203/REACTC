import React, { useState } from 'react';

const Counter = ({ initialValue = 0, onCountChange }) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    if (onCountChange) {
      onCountChange(newCount);
    }
  };

  return (
    <div className="counter">
      <h3>Counter Beispiel (State)</h3>
      <p>Aktuelle Zahl: {count}</p>
      <button onClick={handleIncrement}>Erhöhen</button>
    </div>
  );
};

export default Counter;
