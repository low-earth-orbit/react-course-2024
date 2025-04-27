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
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrease(state, action) {
      state.counter = state.counter - action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});
// If you configure store the way it was in the previous lecture:

// const store = configureStore({
//     reducer: { counter: counterSlice.reducer },
// });

// You will have to access the counter property (and showCounter property) on the counter state slice in useSelector

// const counter = useSelector((state) => state.counter.counter);
// const showCounter = useSelector((state) => state.counter.showCounter);

export const counterActions = counterSlice.actions;

export default store;
