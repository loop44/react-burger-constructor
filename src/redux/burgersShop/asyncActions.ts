import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BurgerShopItem, SearchBurgersParams } from "./types";
import pickBy from "lodash/pickBy";
import identity from "lodash/identity";

export const fetchBurgers = createAsyncThunk<
	BurgerShopItem[],
	SearchBurgersParams
>("burgersShop/fetchBurgersStatus", async (params) => {
	const { sortBy, order, category } = params;
	const { data } = await axios.get<BurgerShopItem[]>(
		`https://62f26124b1098f1508119301.mockapi.io/burgers`,
		{
			params: pickBy(
				{
					category,
					order,
					sortBy,
				},
				identity
			),
		}
	);

	return data;
});
