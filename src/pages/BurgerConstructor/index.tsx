import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import {
  selectChangeMode,
  selectItems,
} from "../../redux/burgerConstructor/selectors";
import { toggleChangeMode } from "../../redux/burgerConstructor/slice";
import { useAppDispatch } from "../../redux/store";

import ChangeModeLayers from "../../components/Layers/ChangeModeLayers";
import NormalLayers from "../../components/Layers/NormalLayers";

import styles from "./BurgerConstructor.module.scss";

const BurgerConstructor: React.FC = () => {
  const dispatch = useAppDispatch();
  const initialItems = useSelector(selectItems);
  const changeMode = useSelector(selectChangeMode);

  const onChangeMode = () => {
    dispatch(toggleChangeMode());
  };

  function createTopBun() {
    if (changeMode) {
      return (
        <motion.div
          animate={{ height: 134 }}
          initial={{ height: 95 }}
          style={{ zIndex: 10000 }}
          transition={{ duration: 0.3 }}
        >
          <img src="/layers/top-bun.png" alt="top-bun" />
        </motion.div>
      );
    } else {
      return (
        <motion.div animate={{ height: 95 }} initial={{ height: 134 }}>
          <img
            src="/layers/top-bun.png"
            alt="top-bun"
            style={{ zIndex: 10000 }}
          />
        </motion.div>
      );
    }
  }

  return (
    <div
      className={`${styles.constructor} ${
        changeMode ? "" : `${styles.active}`
      }`}
    >
      <div className={styles.constructorInner}>
        <div>
          <img src="/layers/bottom-bun.png" alt="bottom-bun" />
        </div>

        {changeMode ? (
          <ChangeModeLayers />
        ) : (
          <div>
            <NormalLayers initialItems={initialItems} />
          </div>
        )}

        {createTopBun()}

        <div
          className={`${styles.btn} ${changeMode ? "" : `${styles.active}`}`}
          onClick={() => onChangeMode()}
        >
          change mode
        </div>
      </div>
    </div>
  );
};

export default BurgerConstructor;
