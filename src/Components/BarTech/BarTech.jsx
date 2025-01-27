import styles from "./BarTech.module.scss";
import { ReactComponent as IconCode } from "../../assets/image/iconCode.svg";

export default function BarSkills() {
  return (
    <div className={styles.barTech}>
      <h3 className={styles.barTech__title}>Навыки</h3>
      <ul className={styles.barTech__list}>
        <div className={styles.barTech__boxSkills}>
          <li className={styles.barTech__item}>
            <IconCode className={styles.barTech__icon} />
            JavaScript
          </li>
          <li className={styles.barTech__item}>
            <IconCode className={styles.barTech__icon} />
            TypeScript
          </li>
          <li className={styles.barTech__item}>
            <IconCode className={styles.barTech__icon} />
            React.js
          </li>
          <li className={styles.barTech__item}>
            <IconCode className={styles.barTech__icon} />
            Redux.js
          </li>
          <li className={styles.barTech__item}>
            <IconCode className={styles.barTech__icon} />
            HTML5
          </li>
          <li className={styles.barTech__item}>
            <IconCode className={styles.barTech__icon} />
            CSS3
          </li>
          <li className={styles.barTech__item}>
            <IconCode className={styles.barTech__icon} />
            SASS
          </li>
          <li className={styles.barTech__item}>
            <IconCode className={styles.barTech__icon} />
            GIT
          </li>
        </div>
        <div className={styles.barTech__boxSkills}>
          <li className={styles.barTech__item}>
            <IconCode className={styles.barTech__icon} />
            Node.js
          </li>
          <li className={styles.barTech__item}>
            <IconCode className={styles.barTech__icon} />
            Express.js
          </li>
          <li className={styles.barTech__item}>
            <IconCode className={styles.barTech__icon} />
            Nestjs
          </li>
          <li className={styles.barTech__item}>
            <IconCode className={styles.barTech__icon} />
            Sequelize
          </li>
          <li className={styles.barTech__item}>
            <IconCode className={styles.barTech__icon} />
            PostgreSQL
          </li>
          <li className={styles.barTech__item}>
            <IconCode className={styles.barTech__icon} />
            MongoDB
          </li>
        </div>
      </ul>
    </div>
  );
}
