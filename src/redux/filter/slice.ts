import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category, FilterSliceState, Sort, SortPropertyEnum } from "./types";

const initialState: FilterSliceState = {
	categoryId: 0,
	sort: {
		name: "popularity",
		sortProperty: SortPropertyEnum.RATING_DESC,
	},
	searchValue: "",
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
		setSearchValue(state, action: PayloadAction<string>) {
			state.searchValue = action.payload;
		},
	},
});

export const { setCategory, setSort, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
