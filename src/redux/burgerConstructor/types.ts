export type BurgerConstructorItem = {
  id: number;
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
