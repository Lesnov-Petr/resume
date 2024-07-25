import styles from "./Experience.module.scss";
import IconCode from "../../assets/image/iconCode.svg";

export default function Experience() {
  return (
    <div className={styles.experience}>
      <h3 className={styles.experience__title}>
        Менеджер ВЭД (Внешняя Экономическая Деятельность)
      </h3>
      <h5
        className={
          styles.experience__title + " " + styles.experience__titleName
        }
      >
        05.2018 - Настоящее время
      </h5>
      <h5
        className={
          styles.experience__title + " " + styles.experience__titleName
        }
      >
        Обязанности :
      </h5>
      <ul className={styles.experience__list}>
        <li className={styles.experience__item}>
          <img className={styles.experience__icon} src={IconCode} alt="code" />
          Деловые встречи, ведение переговоров
        </li>
        <li className={styles.experience__item}>
          <img className={styles.experience__icon} src={IconCode} alt="code" />
          Заключение договоров на оказание услуг
        </li>
        <li className={styles.experience__item}>
          <img className={styles.experience__icon} src={IconCode} alt="code" />
          Таможенное оформление
        </li>
        <li className={styles.experience__item}>
          <img className={styles.experience__icon} src={IconCode} alt="code" />
          Разработка и внедрение новых продуктов
        </li>
      </ul>
      <h5
        className={
          styles.experience__title + " " + styles.experience__titleName
        }
      >
        Достижения :
      </h5>
      <ul className={styles.experience__list}>
        <li className={styles.experience__item}>
          <img className={styles.experience__icon} src={IconCode} alt="code" />
          Сформировал модель оказания услуг для испортеров алкогольного рынка
        </li>
        <li className={styles.experience__item}>
          <img className={styles.experience__icon} src={IconCode} alt="code" />
          Оптимизировал и перевел функционал специалиста в электронный вид
        </li>
        <li className={styles.experience__item}>
          <img className={styles.experience__icon} src={IconCode} alt="code" />
          Сократил финансовые затраты на брокерское обслуживание
        </li>
        <li className={styles.experience__item}>
          <img className={styles.experience__icon} src={IconCode} alt="code" />
          Наладил коммуникации с органами принимающие решения
        </li>
      </ul>
    </div>
  );
}
