import React from "react";
import Header from "../../components/Header";

import styles from "./Intro.module.scss";

const Intro: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <h1 className={styles.mainTitle}>Make Your Burger</h1>
      </div>
    </>
  );
};

export default Intro;
