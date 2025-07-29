import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, showToggle: true };

const counterSlice = createSlice({
  name: 'counter',
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
    showToggle(state) {
      state.showToggle = !state.showToggle;
    },
  },
});

export const counterActions = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
