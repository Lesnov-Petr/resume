import styles from "./BarSofts.module.scss";
import IconCode from "../../assets/image/iconCode.svg";

export default function BarSofts() {
  return (
    <div className={styles.barSoft}>
      <h3 className={styles.barSoft__title}>Личностные навыки</h3>
      <ul className={styles.barSoft__list}>
        <li className={styles.barSoft__item}>
          <img className={styles.barSoft__icon} src={IconCode} alt="code" />
          Нацеленность на результат
        </li>
        <li className={styles.barSoft__item}>
          <img className={styles.barSoft__icon} src={IconCode} alt="code" />
          Работа в команде
        </li>
        <li className={styles.barSoft__item}>
          <img className={styles.barSoft__icon} src={IconCode} alt="code" />
          Трудолюбие
        </li>
        <li className={styles.barSoft__item}>
          <img className={styles.barSoft__icon} src={IconCode} alt="code" />
          Саморазвитие
        </li>
        <li className={styles.barSoft__item}>
          <img className={styles.barSoft__icon} src={IconCode} alt="code" />
          Коммуникабельность
        </li>
      </ul>
    </div>
  );
}
