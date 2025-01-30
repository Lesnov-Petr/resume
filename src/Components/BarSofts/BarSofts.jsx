import styles from "./BarSofts.module.scss";
import IconCode from "../../assets/image/iconCode.svg";

export default function BarSofts() {
  const softSkills = [
    "Нацеленность на результат",
    "Работа в команде",
    "Трудолюбие",
    "Саморазвитие",
    "Коммуникабельность",
  ];
  return (
    <div className={styles.barSoft}>
      <h3 className={styles.barSoft__title}>Личностные навыки</h3>
      <ul className={styles.barSoft__list}>
        {softSkills.map((skill) => {
          return (
            <li className={styles.barSoft__item}>
              <img className={styles.barSoft__icon} src={IconCode} alt="code" />
              {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
