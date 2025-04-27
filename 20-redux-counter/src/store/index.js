import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter = state.counter++;
    },
    decrement(state) {
      state.counter = state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    decrease(state, action) {
      state.counter = state.counter - action.amount;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
