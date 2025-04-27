import { createStore } from "redux";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + action.amount,
        showCounter: state.showCounter,
      };
    case "DECREMENT":
      return {
        counter: state.counter - action.amount,
        showCounter: state.showCounter,
      };
    case "TOGGLE":
      return {
        ...state,
        showCounter: !state.showCounter,
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
