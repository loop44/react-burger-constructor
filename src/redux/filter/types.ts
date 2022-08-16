export enum SortPropertyEnum {
	RATING_DESC = "rating",
	RATING_ASC = "-rating",
	TITLE_DESC = "title",
	TITLE_ASC = "-title",
	PRICE_DESC = "totalPrice",
	PRICE_ASC = "-totalPrice",
}

export enum CategoryPropertyEnum {
	All = "all",
	Meat = "meat",
	Vegan = "vegan",
	Cheezy = "cheezy",
}

export type Sort = {
	name: string;
	sortProperty: SortPropertyEnum;
};

export type Category = number;

export interface FilterSliceState {
	categoryId: Category;
	sort: Sort;
}
