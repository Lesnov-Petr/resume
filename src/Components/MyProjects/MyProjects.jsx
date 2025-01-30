import styles from "./MyProjects.module.scss";
import { ReactComponent as IconProject } from "../../assets/image/iconPoject.svg";
import { ReactComponent as IconCode } from "../../assets/image/iconCode.svg";
import { ReactComponent as IconLink } from "../../assets/image/iconLink.svg";
import dbProjects from "./dbProjects.json";

export default function MyProjects() {
  return (
    <div className={styles.projects}>
      <h3 className={styles.projects__title}>
        <span className={styles.projects__title__span}>Проекты:</span>
      </h3>
      <ul className={styles.projects__list}>
        {dbProjects.map((project) => {
          return (
            <li className={styles.projects__item}>
              <IconProject className={styles.projects__icon} />
              <div className={styles.projects__about}>
                <div className={styles.projects__box}>
                  <a
                    className={styles.projects__link}
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{project.name} </span>
                    <IconLink className={styles.projects__iconLink} />
                  </a>
                </div>
                <div className={styles.boxSteck}>
                  <h4 className={styles.boxSteck__title}>Стек :</h4>
                  <p className={styles.boxSteck__text}>
                    <span className={styles.boxSteck__span}>[</span>
                    {project.steck}
                    <span className={styles.boxSteck__span}>]</span>
                  </p>
                </div>
                <div className={styles.boxAbout}>
                  <h4 className={styles.boxAbout__title}>Задачи</h4>
                  <ul className={styles.boxAbout__listAbout}>
                    {project.tascks.map((tasck) => {
                      return (
                        <li className={styles.boxAbout__item}>
                          <IconCode className={styles.boxAbout__iconCode} />
                          <p className={styles.boxAbout__text}>{tasck}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className={styles.boxAbout}>
                  <h4 className={styles.boxAbout__title}>Достижения</h4>
                  <ul className={styles.boxAbout__listAbout}>
                    {project.progress.map((item) => {
                      return (
                        <li className={styles.boxAbout__item}>
                          <IconCode className={styles.boxAbout__iconCode} />
                          <p className={styles.boxAbout__text}>{item}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
