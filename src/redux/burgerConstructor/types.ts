export type AddedBurger = {
	layers: BurgerConstructorItem[];
	ingredients?: [
		{
			name: string;
			count: number;
		}
	];
	id: string;
	title: string;
	totalPrice: number;
	totalTime: number;
	totalOz: number;
	totalKcal: number;
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
