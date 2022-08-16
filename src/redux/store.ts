import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import burgerConstructor from "./burgerConstructor/slice";
import ingredients from "./ingredients/slice";
import burgers from "./burgersShop/slice";
import filter from "./filter/slice";

export const store = configureStore({
	reducer: {
		burgerConstructor,
		ingredients,
		burgers,
		filter,
	},
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
