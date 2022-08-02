import React from "react";
import { useSelector } from "react-redux";

import { selectChangeMode } from "../../redux/burgerConstructor/selectors";

import styles from "./Header.module.scss";

import Logo from "../../assets/images/logo.svg";

const Header: React.FC = () => {
  const changeMode = useSelector(selectChangeMode);

  return (
    <header
      className={`${styles.header} ${changeMode ? "" : `${styles.active}`}`}
    >
      <div className={styles.headerWrapper}>
        <div className={styles.headerLeft}>
          <img className={styles.logo} src={Logo} alt="logo" />
          <nav className="nav">
            <ul className={styles.navList}>
              <li className={`${styles.navItem} ${styles.active}`}>
                <a href="#">Discover</a>
              </li>
              <li className={styles.navItem}>
                <a href="#">Make Your Burger</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.headerRight}>
          <a className={styles.tel} href="tel:88004378722">
            Call me back
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
