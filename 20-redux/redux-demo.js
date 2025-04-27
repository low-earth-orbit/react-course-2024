const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  }
  return state; // if no action is matched, return the current state
};

// create a store
const store = redux.createStore(counterReducer);

// this function will be called whenever the state changes
// it will log the latest state to the console
// this is a simple subscriber
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// subscribe to the store
store.subscribe(counterSubscriber);

// dispatching an action
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
