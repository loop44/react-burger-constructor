import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import burgerConstructor from "./burgerConstructor/slice";

export const store = configureStore({
  reducer: {
    burgerConstructor,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();