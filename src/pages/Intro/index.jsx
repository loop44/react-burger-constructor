import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <div className={styles.main}>
      <div className={styles.mainInner}>
        <h1 className={styles.mainTitle}>Make Your Burger</h1>
      </div>
    </div>
  )
}

export default Intro;