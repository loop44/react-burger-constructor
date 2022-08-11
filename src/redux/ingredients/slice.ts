import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AddedIngredients, IngredientsSliceState } from "./types";

const initialState: IngredientsSliceState = {
	items: [
		{
			id: 1,
			title: "Bun",
			littleImg: "/ingredients/bun.png",
			bigImg: "/layers/bun.png",
			height: 25,
			normalHeight: 80,
			count: 0,
			price: 0.61,
			time: 0.1,
			oz: 2.5,
			kcal: 0.12,
		},
		{
			id: 2,
			title: "Cheese",
			littleImg: "/ingredients/cheese.png",
			bigImg: "/layers/cheese.png",
			height: 4,
			normalHeight: 63,
			count: 0,
			price: 0.23,
			time: 0.1,
			oz: 0.7,
			kcal: 0.078,
		},
		{
			id: 3,
			title: "Cutlet",
			littleImg: "/ingredients/cutlet.png",
			bigImg: "/layers/cutlet.png",
			height: 35,
			normalHeight: 74,
			count: 0,
			price: 1.37,
			time: 1.5,
			oz: 3.5,
			kcal: 0.3,
		},
		{
			id: 4,
			title: "Mayo",
			littleImg: "/ingredients/mayo.png",
			bigImg: "/layers/mayo.png",
			height: 10,
			normalHeight: 65,
			count: 0,
			price: 0.2,
			time: 0.3,
			oz: 0.1,
			kcal: 0.04,
		},
		{
			id: 5,
			title: "Salad",
			littleImg: "/ingredients/salad.png",
			bigImg: "/layers/salad.png",
			height: 30,
			normalHeight: 82,
			count: 0,
			price: 0.2,
			time: 0.1,
			oz: 0.05,
			kcal: 0.01,
		},
		{
			id: 6,
			title: "Onion",
			littleImg: "/ingredients/onion.png",
			bigImg: "/layers/onion.png",
			height: 10,
			normalHeight: 55,
			count: 0,
			price: 0.1,
			time: 0.1,
			oz: 0.05,
			kcal: 0.01,
		},
		{
			id: 7,
			title: "Tomato",
			littleImg: "/ingredients/tomato.png",
			bigImg: "/layers/tomato.png",
			height: 10,
			normalHeight: 55,
			count: 0,
			price: 0.5,
			time: 0.3,
			oz: 0.4,
			kcal: 0.09,
		},
		{
			id: 8,
			title: "Cucumber",
			littleImg: "/ingredients/cucumber.png",
			bigImg: "/layers/cucumber.png",
			height: 10,
			normalHeight: 55,
			count: 0,
			price: 0.2,
			time: 0.1,
			oz: 0.02,
			kcal: 0.01,
		},
	],
};

const ingredientsSlice = createSlice({
	name: "constructor",
	initialState,
	reducers: {
		setIngredients(state, action: PayloadAction<AddedIngredients>) {
			state.items.forEach((item) => {
				action.payload.forEach((layer) => {
					if (item.title === layer.name) {
						item.count = layer.count;
					}
				});
			});
		},
		removeAllIngredients(state) {
			state.items.forEach((item) => {
				item.count = 0;
			});
		},
		incrementItem(state, action: PayloadAction<number>) {
			state.items.forEach((item) => {
				if (item.id === action.payload) {
					item.count++;
				}
			});
		},
		decrementItem(state, action: PayloadAction<number>) {
			state.items.forEach((item) => {
				if (item.id === action.payload) {
					item.count--;
				}
			});
		},
	},
});

export const {
	setIngredients,
	removeAllIngredients,
	incrementItem,
	decrementItem,
} = ingredientsSlice.actions;

export default ingredientsSlice.reducer;
