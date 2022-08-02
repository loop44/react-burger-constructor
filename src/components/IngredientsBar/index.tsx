import { useSelector } from "react-redux";

import { useAppDispatch } from "../../redux/store";
import { plusItem } from "../../redux/burgerConstructor/slice";
import { minusItem } from "../../redux/burgerConstructor/slice";
import { selectChangeMode } from "../../redux/burgerConstructor/selectors";

import styles from "./IngredientsBar.module.scss";

import minus from "../../assets/images/icons/minus.svg";
import plus from "../../assets/images/icons/plus.svg";

type IngredientBarItem = {
  id: number;
  title: string;
  littleImg: string;
  bigImg: string;
  height: number;
  normalHeight: number;
};

const items = [
  {
    id: 1,
    title: "Bun",
    littleImg: "/ingredients/bun.png",
    bigImg: "/layers/bun.png",
    height: 25,
    normalHeight: 80,
  },
  {
    id: 2,
    title: "Cheese",
    littleImg: "/ingredients/cheese.png",
    bigImg: "/layers/cheese.png",
    height: 4,
    normalHeight: 63,
  },
  {
    id: 3,
    title: "Cutlet",
    littleImg: "/ingredients/cutlet.png",
    bigImg: "/layers/cutlet.png",
    height: 35,
    normalHeight: 74,
  },
  {
    id: 4,
    title: "Mayo",
    littleImg: "/ingredients/mayo.png",
    bigImg: "/layers/mayo.png",
    height: 10,
    normalHeight: 65,
  },
  {
    id: 5,
    title: "Salad",
    littleImg: "/ingredients/salad.png",
    bigImg: "/layers/salad.png",
    height: 30,
    normalHeight: 82,
  },
  {
    id: 6,
    title: "Onion",
    littleImg: "/ingredients/onion.png",
    bigImg: "/layers/onion.png",
    height: 10,
    normalHeight: 55,
  },
  {
    id: 7,
    title: "Tomato",
    littleImg: "/ingredients/tomato.png",
    bigImg: "/layers/tomato.png",
    height: 10,
    normalHeight: 55,
  },
  {
    id: 8,
    title: "Cucumber",
    littleImg: "/ingredients/cucumber.png",
    bigImg: "/layers/cucumber.png",
    height: 10,
    normalHeight: 55,
  },
];

const IngredientsBar = () => {
  const dispatch = useAppDispatch();
  const changeMode = useSelector(selectChangeMode);

  const onPlusItemClick = (item: IngredientBarItem) => {
    dispatch(
      plusItem({
        id: Math.floor(Math.random() * 10000),
        title: item.title,
        img: item.bigImg,
        height: item.height,
        normalHeight: item.normalHeight,
      })
    );
  };

  const onMinusItemClick = (item: IngredientBarItem) => {
    dispatch(minusItem(item.title));
  };

  return (
    <div
      className={`${styles.ingredientBar} ${
        changeMode ? "" : `${styles.active}`
      }`}
    >
      <div className={styles.ingredientBarInner}>
        {items.map((item) => (
          <div className={styles.inrgedientItem} key={item.id}>
            <img
              width={104}
              height={59}
              src={item.littleImg}
              alt={item.title}
            />
            <p>{item.title}</p>
            <div>
              <img
                width={28}
                height={28}
                src={minus}
                alt="minus"
                onClick={() => onMinusItemClick(item)}
              />
              <span>0</span>
              <img
                width={28}
                height={28}
                src={plus}
                alt="plus"
                onClick={() => onPlusItemClick(item)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IngredientsBar;
