import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const incrementHandler = useCallback(
    (amount) => {
      dispatch({ type: "INCREMENT", amount });
    },
    [dispatch]
  ); // useCallback prevents functions from being recreated on every render

  const decrementHandler = useCallback(
    (amount) => {
      dispatch({ type: "DECREMENT", amount });
    },
    [dispatch]
  );

  const toggleCounterHandler = useCallback(() => {
    dispatch({ type: "TOGGLE" });
  }, [dispatch]);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() => decrementHandler(1)}>-</button>
        <button onClick={() => incrementHandler(5)}>+ 5</button>
        <button onClick={() => incrementHandler(1)}>+</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
