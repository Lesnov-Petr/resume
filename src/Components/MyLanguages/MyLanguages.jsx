import styles from "./MyLanguages.module.scss";

export default function MyLanguages() {
  return (
    <div className={styles.language}>
      <h4 className={styles.language__title}>Знание языков</h4>
      <ul className={styles.language__list}>
        <li className={styles.language__item}>Русский - родной</li>
        <li className={styles.language__item}>Английский - B1</li>
      </ul>
    </div>
  );
}
