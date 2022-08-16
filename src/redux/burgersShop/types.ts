export enum FetchStatus {
	LOADING = "LOADING",
	SUCCESS = "SUCCSESS",
	ERROR = "ERROR",
}

export type BurgerShopItem = {
	id: string;
	title: string;
	totalPrice: number;
	totalTime: number;
	totalOz: number;
	totalKcal: number;
	layers: string[];
};

export type SearchBurgersParams = {
	sortBy: string;
	order: string;
	category: string;
};

export interface BurgerShopSliceState {
	items: BurgerShopItem[];
	status: FetchStatus;
}
