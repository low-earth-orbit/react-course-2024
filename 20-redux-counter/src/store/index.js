import { createStore } from "redux";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + action.amount,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - action.amount,
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
