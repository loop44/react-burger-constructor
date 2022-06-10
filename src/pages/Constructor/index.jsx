import styles from "./Constructor.module.css";

import time from "../../assets/images/icons/time.svg"
import weight from "../../assets/images/icons/weight.svg"
import kkal from "../../assets/images/icons/kkal.svg"

const Constructor = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.mainTitle}>Make Your Burger</h1>

      <div className={styles.burger}>
      </div>

      <div className={styles.summary}>
        <h2 className={styles.summaryTitle}>Summary</h2>
        <div className={styles.summaryOrder}>
          <span>$0.00</span>
          <a href="#">Checkout</a>
        </div>
        <p className={styles.summaryText}>Build a <span>$10</span> Burger and Get a Gift</p>
        <div className={styles.summaryInfo}>
          <div>
            <img src={time} alt="time" />
            <p>0 min</p>
          </div>
          <div>
            <img src={weight} alt="weight" />
            <p>0 oz</p>
          </div>
          <div>
            <img src={kkal} alt="kkal" />
            <p>0 kcal</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Constructor;