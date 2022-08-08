export type IngredientItem = {
  id: number;
  title: string;
  littleImg: string;
  bigImg: string;
  height: number;
  normalHeight: number;
  count: number;
};

export interface IngredientsSliceState {
  items: IngredientItem[];
}