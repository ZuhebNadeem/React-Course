import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialCounterState = { counter: 0, showCounter: true };

// Create Slice
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
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
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// Dispatch Actions
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
