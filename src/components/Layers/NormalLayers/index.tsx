import React from "react";
import { motion } from "framer-motion";

import { BurgerConstructorItem } from "../../../redux/burgerConstructor/types";

type NormalLayersProps = {
  initialItems: BurgerConstructorItem[];
};

const NormalLayers: React.FC<NormalLayersProps> = ({ initialItems }) => {
  return (
    <>
      {initialItems.map((item, index) => {
        const animatedHeight = item.height;
        const initialHeight = item.normalHeight;

        return (
          <motion.div
            key={item.id}
            animate={{ height: animatedHeight }}
            initial={{ height: initialHeight }}
          >
            <img
              src={item.img}
              alt={item.title}
              style={{ zIndex: initialItems.length - index + 1 }}
            />
          </motion.div>
        );
      })}
    </>
  );
};

export default NormalLayers;
