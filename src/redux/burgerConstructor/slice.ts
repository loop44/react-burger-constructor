import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
	AddedBurger,
	BurgerConstructorItem,
	BurgerConstructorSliceState,
} from "./types";

const initialState: BurgerConstructorSliceState = {
	items: [],
	changeMode: false,
	zoom: 6,
	price: 0,
	time: 0,
	oz: 0,
	kcal: 0,
};

const burgerConstructorSlice = createSlice({
	name: "constructor",
	initialState,
	reducers: {
		setItems(state, action: PayloadAction<BurgerConstructorItem[]>) {
			state.items = action.payload;
		},
		setBurger(state, action: PayloadAction<AddedBurger>) {
			state.items = action.payload.layers;
			state.price = Number(action.payload.totalPrice.toFixed(2));
			state.time = Number(action.payload.totalTime.toFixed(2));
			state.oz = Number(action.payload.totalOz.toFixed(2));
			state.kcal = Number(action.payload.totalKcal.toFixed(2));
		},
		removeAll(state) {
			state.items.length = 0;
			state.price = 0;
			state.time = 0;
			state.oz = 0;
			state.kcal = 0;
		},
		plusItem(state, action: PayloadAction<BurgerConstructorItem>) {
			state.items.unshift(action.payload);
			state.price = Number((action.payload.price + state.price).toFixed(2));
			state.time = Number((action.payload.time + state.time).toFixed(2));
			state.oz = Number((action.payload.oz + state.oz).toFixed(2));
			state.kcal = Number((action.payload.kcal + state.kcal).toFixed(2));
		},
		minusItem(state, action: PayloadAction<string>) {
			const index = state.items.findIndex((item) => {
				if (item.title === action.payload) {
					return true;
				}
			});
			if (index !== -1) {
				state.price = Number(
					(state.price - state.items[index].price).toFixed(2)
				);
				state.time = Number((state.time - state.items[index].time).toFixed(2));
				state.oz = Number((state.oz - state.items[index].oz).toFixed(2));
				state.kcal = Number((state.kcal - state.items[index].kcal).toFixed(2));
				state.items.splice(index, 1);
			}
		},
		toggleChangeMode(state) {
			state.changeMode = !state.changeMode;
		},
		zoomIn(state) {
			if (state.zoom < 6) {
				state.zoom = state.zoom + 1;
			}
		},
		zoomOut(state) {
			if (state.zoom > 0) {
				state.zoom = state.zoom - 1;
			}
		},
	},
});

export const {
	setItems,
	setBurger,
	removeAll,
	plusItem,
	minusItem,
	toggleChangeMode,
	zoomIn,
	zoomOut,
} = burgerConstructorSlice.actions;

export default burgerConstructorSlice.reducer;
