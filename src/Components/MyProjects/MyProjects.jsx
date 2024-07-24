import styles from "./MyProjects.module.scss";
import IconProject from "../../assets/image/iconPoject.svg";

export default function MyProjects() {
  return (
    <div className={styles.projects}>
      <h3 className={styles.projects__title}>Проекты (завершенные)</h3>
      <ul className={styles.projects__list}>
        <li className={styles.projects__item}>
          <img
            className={styles.projects__icon}
            src={IconProject}
            alt="iconProject"
          />
        </li>
        <li className={styles.projects__item}>
          <img
            className={styles.projects__icon}
            src={IconProject}
            alt="iconProject"
          />
        </li>
        <li className={styles.projects__item}>
          <img
            className={styles.projects__icon}
            src={IconProject}
            alt="iconProject"
          />
        </li>
        <li className={styles.projects__item}>
          <img
            className={styles.projects__icon}
            src={IconProject}
            alt="iconProject"
          />
        </li>
        <li className={styles.projects__item}>
          <img
            className={styles.projects__icon}
            src={IconProject}
            alt="iconProject"
          />
        </li>
      </ul>
    </div>
  );
}
