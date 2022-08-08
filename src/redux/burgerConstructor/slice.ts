import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { BurgerConstructorItem, BurgerConstructorSliceState } from "./types";

const initialState: BurgerConstructorSliceState = {
  items: [],
  changeMode: false,
  zoom: 6,
};

const burgerConstructorSlice = createSlice({
  name: "constructor",
  initialState,
  reducers: {
    plusItem(state, action: PayloadAction<BurgerConstructorItem>) {
      state.items.unshift(action.payload);
    },
    setItems(state, action: PayloadAction<BurgerConstructorItem[]>) {
      state.items = action.payload;
    },
    minusItem(state, action: PayloadAction<string>) {
      const index = state.items.findIndex((item) => {
        if (item.title === action.payload) {
          return true;
        }
      });
      if (index !== -1) {
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
  plusItem,
  setItems,
  minusItem,
  toggleChangeMode,
  zoomIn,
  zoomOut,
} = burgerConstructorSlice.actions;

export default burgerConstructorSlice.reducer;
