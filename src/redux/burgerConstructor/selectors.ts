import { RootState } from "../store";

export const selectItems = (state: RootState) => state.burgerConstructor.items;

export const selectChangeMode = (state: RootState) => {
  return state.burgerConstructor.changeMode;
};

export const selectZoomValue = (state: RootState) => {
  return state.burgerConstructor.zoom;
};

export const selectTotalPrice = (state: RootState) => {
  return state.burgerConstructor.price;
}