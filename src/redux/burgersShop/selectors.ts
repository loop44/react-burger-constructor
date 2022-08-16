import { RootState } from "../store";

export const selectBurgers = (state: RootState) => state.burgers.items;

export const selectLoadingStatus = (state: RootState) => state.burgers.status;
