import { combineReducers, configureStore } from "@reduxjs/toolkit";
import countersReducer from "./reducers/countersSlice";

const rootReducer = combineReducers({ countersReducer });

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
