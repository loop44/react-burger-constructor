export type BurgerConstructorItem = {
  id: number;
  title: string;
  img: string;
  height: number;
  normalHeight: number;
};

export interface BurgerConstructorSliceState {
  items: BurgerConstructorItem[];
  changeMode: boolean;
}
