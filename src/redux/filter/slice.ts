import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category, FilterSliceState, Sort, SortPropertyEnum } from "./types";

const initialState: FilterSliceState = {
	categoryId: 0,
	sort: {
		name: "popularity",
		sortProperty: SortPropertyEnum.RATING_DESC,
	},
};

const filterSlice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		setCategory(state, action: PayloadAction<Category>) {
			state.categoryId = action.payload;
		},
		setSort(state, action: PayloadAction<Sort>) {
			state.sort = action.payload;
		},
	},
});

export const { setCategory, setSort } = filterSlice.actions;

export default filterSlice.reducer;
