import { RootState } from '../store';

export const selectItems = (state: RootState) => state.burgerConstructor.items;
