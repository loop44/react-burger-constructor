import React from "react";

import styles from "./Intro.module.scss";

import mainImg from "../../assets/images/main.png";

const Intro: React.FC = () => {
  return (
    <>
      <div className={styles.main}>
        <h1>Make Your Burger</h1>
        <img src={mainImg} alt="" />
      </div>
    </>
  );
};

export default Intro;
