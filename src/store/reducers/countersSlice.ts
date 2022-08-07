import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICounter } from "../../interfaces/ICounter";
import { ITimerCount } from "../../interfaces/ITimerCount";

interface countersState {
  counters: ICounter[];
  totalCount: number;
}

const initialState: countersState = {
  counters: [],
  totalCount: 0,
};

export const countersSlice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    increment(state, action: PayloadAction<string>) {
      state.counters.map((el) => (el.id === action.payload ? el.value++ : el));
      let sum = 0;
      state.counters.forEach((el) =>
        !el.isFourth ? (sum = sum + el.value) : sum
      );
      state.totalCount = sum;
    },
    timerCounter(state, action: PayloadAction<ITimerCount>) {
      state.counters.forEach((el) => {
        if (el.id === action.payload.id) {
          el.value = action.payload.value;
        }
      });
    },
    decrement(state, action: PayloadAction<string>) {
      state.counters.map((el) => (el.id === action.payload ? el.value-- : el));
      let sum = 0;
      state.counters.forEach((el) =>
        !el.isFourth ? (sum = sum + el.value) : sum
      );
      state.totalCount = sum;
    },
    addCounter(state) {
      const newCounter = {
        id: new Date().toString() + (Math.random() * 10).toString(),
        value: state.totalCount,
        isFourth: (state.counters.length + 1) % 4 === 0 ? true : false,
      };
      state.counters.push(newCounter);
    },
    deleteCounter(state, action: PayloadAction<string>) {
      state.counters = state.counters.filter((el) => el.id !== action.payload);
      let sum = 0;
      state.counters.forEach((el) =>
        !el.isFourth ? (sum = sum + el.value) : sum
      );
      state.totalCount = sum;
    },
  },
});

export default countersSlice.reducer;
