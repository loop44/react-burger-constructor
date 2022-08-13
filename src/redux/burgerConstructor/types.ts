import { IngredientItem } from "../ingredients/types";

export type SetBurgerActionObject = {
	layers: any;
	id: string;
	title: string;
	totalPrice: number;
	totalTime: number;
	totalOz: number;
	totalKcal: number;
	commonIngredients: IngredientItem[];
};

export type BurgerConstructorItem = {
	id: string;
	title: string;
	img: string;
	height: number;
	normalHeight: number;
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
