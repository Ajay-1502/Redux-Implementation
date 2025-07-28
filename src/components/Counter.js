import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const [showCounter, setShowCounter] = useState(true);

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 10 });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const toggleCounterHandler = () => {
    setShowCounter(!showCounter);
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && (
        <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={decrementHandler}>Decrement</button>
          <button onClick={increaseHandler}>Increase by 10</button>
        </div>
      )}
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
