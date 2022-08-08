import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { BurgerConstructorItem, BurgerConstructorSliceState } from "./types";

const initialState: BurgerConstructorSliceState = {
  items: [],
  changeMode: false,
  zoom: 6,
  price: 0,
  time: 0,
  oz: 0,
  kcal: 0
};

const burgerConstructorSlice = createSlice({
  name: "constructor",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<BurgerConstructorItem[]>) {
      state.items = action.payload;
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
      state.price += action.payload.price
      state.time += action.payload.time
      state.oz += action.payload.oz
      state.kcal += action.payload.kcal
    },
    minusItem(state, action: PayloadAction<string>) {
      const index = state.items.findIndex((item) => {
        if (item.title === action.payload) {
          return true;
        }
      });
      if (index !== -1) {
        state.price -= state.items[index].price
        state.time -= state.items[index].time
        state.oz -= state.items[index].oz
        state.kcal -= state.items[index].kcal
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
  removeAll,
  plusItem,
  minusItem,
  toggleChangeMode,
  zoomIn,
  zoomOut,
} = burgerConstructorSlice.actions;

export default burgerConstructorSlice.reducer;
