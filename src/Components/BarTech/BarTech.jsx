import styles from "./BarTech.module.scss";
import IconCode from "../../assets/image/iconCode.svg";

export default function BarSkills() {
  return (
    <div className={styles.barTech}>
      <h3 className={styles.barTech__title}>Навыки</h3>
      <ul className={styles.barTech__list}>
        <div className={styles.barTech__boxSkills}>
          <li className={styles.barTech__item}>
            <img className={styles.barTech__icon} src={IconCode} alt="code" />
            JavaScript
          </li>
          <li className={styles.barTech__item}>
            <img className={styles.barTech__icon} src={IconCode} alt="code" />
            TypeScript
          </li>
          <li className={styles.barTech__item}>
            <img className={styles.barTech__icon} src={IconCode} alt="code" />
            React.js
          </li>
          <li className={styles.barTech__item}>
            <img className={styles.barTech__icon} src={IconCode} alt="code" />
            Redux.js
          </li>
          <li className={styles.barTech__item}>
            <img className={styles.barTech__icon} src={IconCode} alt="code" />
            Redux Toolkit
          </li>
          <li className={styles.barTech__item}>
            <img className={styles.barTech__icon} src={IconCode} alt="code" />
            SSR
          </li>
        </div>
        <div className={styles.barTech__boxSkills}>
          <li className={styles.barTech__item}>
            <img className={styles.barTech__icon} src={IconCode} alt="code" />
            Node.js
          </li>
          <li className={styles.barTech__item}>
            <img className={styles.barTech__icon} src={IconCode} alt="code" />
            Express.js
          </li>
          <li className={styles.barTech__item}>
            <img className={styles.barTech__icon} src={IconCode} alt="code" />
            NoSQL
          </li>
          <li className={styles.barTech__item}>
            <img className={styles.barTech__icon} src={IconCode} alt="code" />
            MySQL
          </li>
          <li className={styles.barTech__item}>
            <img className={styles.barTech__icon} src={IconCode} alt="code" />
            PostgreSQL
          </li>
          <li className={styles.barTech__item}>
            <img className={styles.barTech__icon} src={IconCode} alt="code" />
            MongoDB
          </li>
        </div>
        <div className={styles.barTech__boxSkills}>
          <li className={styles.barTech__item}>
            <img className={styles.barTech__icon} src={IconCode} alt="code" />
            HTML5
          </li>
          <li className={styles.barTech__item}>
            <img className={styles.barTech__icon} src={IconCode} alt="code" />
            CSS3
          </li>
          <li className={styles.barTech__item}>
            <img className={styles.barTech__icon} src={IconCode} alt="code" />
            SASS
          </li>
          <li className={styles.barTech__item}>
            <img className={styles.barTech__icon} src={IconCode} alt="code" />
            GIT
          </li>
        </div>
      </ul>
    </div>
  );
}
