import { IngredientItem } from "../ingredients/types";

export type SetBurgerActionObject = {
	layers: string[];
	commonIngredients: IngredientItem[];
};

export type BurgerConstructorItem = {
	id: string;
	title: string;
	img: string;
	height: number;
	normalHeight: number;
};

export type AddBurgerObject = {
	item: BurgerConstructorItem;
	price: number;
	time: number;
	oz: number;
	kcal: number;
};

export type RemoveBurgerObject = {
	title: string;
	price: number;
	time: number;
	oz: number;
	kcal: number;
};

export interface BurgerConstructorSliceState {
	items: BurgerConstructorItem[];
	changeMode: boolean;
	zoom: number;
	price: number;
	time: number;
	oz: number;
	kcal: number;
}
