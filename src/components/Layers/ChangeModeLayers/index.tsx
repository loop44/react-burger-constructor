import React from "react";
import { Reorder, useMotionValue, motion } from "framer-motion";

import { useAppDispatch } from "../../../redux/store";
import { setItems } from "../../../redux/burgerConstructor/slice";
import { useSelector } from "react-redux";
import { selectItems } from "../../../redux/burgerConstructor/selectors";

import { BurgerConstructorItem } from "../../../redux/burgerConstructor/types";

type ItemProps = {
  item: BurgerConstructorItem;
  zIndex: number;
};

const ChangeModeLayers: React.FC = () => {
  const dispatch = useAppDispatch();
  const initialItems = useSelector(selectItems);

  return (
    <Reorder.Group
      axis="y"
      onReorder={(items) => dispatch(setItems(items))}
      values={initialItems}
    >
      {initialItems.map((item, index) => {
        return (
          <Item
            key={item.id}
            item={item}
            zIndex={initialItems.length - index + 1}
          />
        );
      })}
    </Reorder.Group>
  );
};

const Item: React.FC<ItemProps> = ({ item, zIndex }) => {
  const y = useMotionValue(0);

  const animatedHeight = item.normalHeight;
  const initialHeight = item.height;
  return (
    <Reorder.Item value={item} id={String(item.id)} style={{ y }}>
      <motion.div
        animate={{ height: animatedHeight }}
        initial={{ height: initialHeight }}
      >
        <img src={item.img} alt={item.title} style={{ zIndex }} />
      </motion.div>
    </Reorder.Item>
  );
};

export default ChangeModeLayers;
