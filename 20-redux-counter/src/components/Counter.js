import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const incrementHandler = () => dispatch(counterActions.increment());
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = (amount) => {
    dispatch(counterActions.increase(amount)); // { type: SOME_ACTION, payload: SOME_VALUE }
  };
  const decreaseHandler = (amount) => dispatch(counterActions.decrease(amount));

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>-</button>
        <button onClick={() => decreaseHandler(5)}>- 5</button>
        <button onClick={() => increaseHandler(5)}>+ 5</button>
        <button onClick={incrementHandler}>+</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
