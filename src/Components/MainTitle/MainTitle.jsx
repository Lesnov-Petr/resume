import styles from "./MainTitle.module.scss";

export default function MainTitle() {
  return (
    <div className={styles.mainTitle}>
      <h1 className={styles.mainTitle__name}>Леснов Пётр</h1>
      <h2 className={styles.mainTitle__profession}>Full-Stack Developer</h2>
    </div>
  );
}
