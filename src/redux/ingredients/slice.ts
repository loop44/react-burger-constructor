import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IngredientItem, IngredientsSliceState } from "./types";

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
    },
    {
      id: 2,
      title: "Cheese",
      littleImg: "/ingredients/cheese.png",
      bigImg: "/layers/cheese.png",
      height: 4,
      normalHeight: 63,
      count: 0,
    },
    {
      id: 3,
      title: "Cutlet",
      littleImg: "/ingredients/cutlet.png",
      bigImg: "/layers/cutlet.png",
      height: 35,
      normalHeight: 74,
      count: 0,
    },
    {
      id: 4,
      title: "Mayo",
      littleImg: "/ingredients/mayo.png",
      bigImg: "/layers/mayo.png",
      height: 10,
      normalHeight: 65,
      count: 0,
    },
    {
      id: 5,
      title: "Salad",
      littleImg: "/ingredients/salad.png",
      bigImg: "/layers/salad.png",
      height: 30,
      normalHeight: 82,
      count: 0,
    },
    {
      id: 6,
      title: "Onion",
      littleImg: "/ingredients/onion.png",
      bigImg: "/layers/onion.png",
      height: 10,
      normalHeight: 55,
      count: 0,
    },
    {
      id: 7,
      title: "Tomato",
      littleImg: "/ingredients/tomato.png",
      bigImg: "/layers/tomato.png",
      height: 10,
      normalHeight: 55,
      count: 0,
    },
    {
      id: 8,
      title: "Cucumber",
      littleImg: "/ingredients/cucumber.png",
      bigImg: "/layers/cucumber.png",
      height: 10,
      normalHeight: 55,
      count: 0,
    },
  ],
};

const ingredientsSlice = createSlice({
  name: "constructor",
  initialState,
  reducers: {
    setIngredients(state, action: PayloadAction<IngredientItem[]>) {
      state.items = action.payload;
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

export const { setIngredients, removeAllIngredients, incrementItem, decrementItem } =
  ingredientsSlice.actions;

export default ingredientsSlice.reducer;
