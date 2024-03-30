import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1 style={{ color: 'white', textAlign: 'center' }}>React Web</h1>
        <p className="count-display">{count}</p>
        <button onClick={handleDecrement} className="action-button">Decrement</button>
        <button onClick={handleIncrement} className="action-button">Increment</button>
        <div className="btn1">{<button onClick={handleReset} className="action-button">Reset</button>}</div>
         
     </div>
     
  );
};

export default Counter;
