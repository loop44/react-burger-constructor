import { configureStore } from "@reduxjs/toolkit";
import constructor from "./constructor/slice";

export const store = configureStore({
  reducer: {
    counter: constructor,
  },
});
