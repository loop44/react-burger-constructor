import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartSliceState } from "./types";

const initialState: CartSliceState = {
	items: [],
	totalPrice: 0,
	totalCount: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		setItem(state, action: PayloadAction<CartItem>) {
			state.items.push(action.payload);
			state.totalPrice = Number(
				(state.totalPrice + action.payload.price).toFixed(2)
			);
			state.totalCount += 1;
		},
		deleteItem(state, action: PayloadAction<CartItem>) {
			state.items = state.items.filter((obj) => obj.id !== action.payload.id);
			state.totalPrice = Number(
				(state.totalPrice - action.payload.price).toFixed(2)
			);
			state.totalCount -= 1;
		},
		removeAllItems(state) {
			state.items.length = 0;
			state.totalCount = 0;
			state.totalPrice = 0;
		},
	},
});

export const { setItem, deleteItem, removeAllItems } = cartSlice.actions;

export default cartSlice.reducer;
