import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

import {
	SetBurgerActionObject,
	BurgerConstructorItem,
	BurgerConstructorSliceState,
	AddBurgerObject,
	RemoveBurgerObject,
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
		setBurger(state, action: PayloadAction<SetBurgerActionObject>) {
			if (state.items) {
				state.items.length = 0;
				state.price = 0;
				state.time = 0;
				state.oz = 0;
				state.kcal = 0;
			}
			action.payload.layers.forEach((item: string) => {
				action.payload.commonIngredients.forEach((ingredient) => {
					if (item === ingredient.title) {
						state.items.push({
							id: uuid(),
							title: ingredient.title,
							img: ingredient.bigImg,
							height: ingredient.height,
							normalHeight: ingredient.normalHeight,
						});
						state.price = Number((state.price + ingredient.price).toFixed(2));
						state.time = Number((state.time + ingredient.time).toFixed(2));
						state.oz = Number((state.oz + ingredient.oz).toFixed(2));
						state.kcal = Number((state.kcal + ingredient.kcal).toFixed(2));
					}
				});
			});
		},
		removeAll(state) {
			state.items.length = 0;
			state.price = 0;
			state.time = 0;
			state.oz = 0;
			state.kcal = 0;
		},
		plusItem(state, action: PayloadAction<AddBurgerObject>) {
			state.items.unshift(action.payload.item);
			state.price = Number((state.price + action.payload.price).toFixed(2));
			state.time = Number((state.time + action.payload.time).toFixed(2));
			state.oz = Number((state.oz + action.payload.oz).toFixed(2));
			state.kcal = Number((state.kcal + action.payload.kcal).toFixed(2));
		},
		minusItem(state, action: PayloadAction<RemoveBurgerObject>) {
			const index = state.items.findIndex((item) => {
				if (item.title === action.payload.title) {
					return true;
				}
			});
			if (index !== -1) {
				state.price = Number((state.price - action.payload.price).toFixed(2));
				state.time = Number((state.time - action.payload.time).toFixed(2));
				state.oz = Number((state.oz - action.payload.oz).toFixed(2));
				state.kcal = Number((state.kcal - action.payload.kcal).toFixed(2));
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
