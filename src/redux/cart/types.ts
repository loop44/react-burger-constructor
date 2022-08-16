export type CartItem = {
	id: string;
	name: string;
	price: number;
};

export interface CartSliceState {
	items: CartItem[];
	totalPrice: number;
	totalCount: number;
}
