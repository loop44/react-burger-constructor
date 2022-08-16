import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchBurgers } from "./asyncActions";
import { BurgerShopItem, BurgerShopSliceState, FetchStatus } from "./types";

const initialState: BurgerShopSliceState = {
	items: [],
	status: FetchStatus.LOADING,
};

const burgersShopSlice = createSlice({
	name: "burgersShop",
	initialState,
	reducers: {
		setItems(state, action: PayloadAction<BurgerShopItem[]>) {
			state.items = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchBurgers.pending, (state) => {
			state.status = FetchStatus.LOADING;
			state.items = [];
		});

		builder.addCase(fetchBurgers.fulfilled, (state, action) => {
			state.items = action.payload;
			state.status = FetchStatus.SUCCESS;
		});

		builder.addCase(fetchBurgers.rejected, (state) => {
			state.status = FetchStatus.ERROR;
			state.items = [];
		});
	},
});

export const { setItems } = burgersShopSlice.actions;

export default burgersShopSlice.reducer;
