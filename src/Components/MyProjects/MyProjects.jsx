import styles from "./MyProjects.module.scss";
import { ReactComponent as IconProject } from "../../assets/image/iconPoject.svg";
import { ReactComponent as IconCode } from "../../assets/image/iconCode.svg";
import { ReactComponent as IconLink } from "../../assets/image/iconLink.svg";
export default function MyProjects() {
  return (
    <div className={styles.projects}>
      <h3 className={styles.projects__title}>
        <span className={styles.projects__title__span}>
          Проекты. Опыт 1 год.
        </span>
      </h3>
      <ul className={styles.projects__list}>
        <li className={styles.projects__item}>
          <IconProject className={styles.projects__icon} />
        </li>
        <li className={styles.projects__item}>
          <IconProject className={styles.projects__icon} />
        </li>
        <li className={styles.projects__item}>
          <IconProject className={styles.projects__icon} />
        </li>
        <li className={styles.projects__item}>
          <IconProject className={styles.projects__icon} />
          <div className={styles.projects__about}>
            <div className={styles.projects__box}>
              <a
                className={styles.projects__link}
                href="https://lesnov-petr.github.io/WebStudio/"
                target="_blank"
                rel="noreferrer"
              >
                <span>Web Studio</span>
                <IconLink className={styles.projects__iconLink} />
              </a>
            </div>
            <div className={styles.boxAbout}>
              <h4 className={styles.boxAbout__title}>Задачи</h4>
              <ul className={styles.boxAbout__listAbout}>
                <li className={styles.boxAbout__item}>
                  <IconCode className={styles.boxAbout__iconCode} />
                  <p className={styles.boxAbout__text}>
                    Верстка по шаблону Figma
                  </p>
                </li>
                <li>
                  <IconCode className={styles.boxAbout__iconCode} />
                  <p className={styles.boxAbout__text}></p>
                </li>
                <li>
                  <IconCode className={styles.boxAbout__iconCode} />
                  <p className={styles.boxAbout__text}></p>
                </li>
              </ul>
            </div>
            <div className={styles.boxAbout}>
              <h4 className={styles.boxAbout__title}>Достижения</h4>
              <ul className={styles.boxAbout__listAbout}>
                <li className={styles.boxAbout__item}>
                  <IconCode className={styles.boxAbout__iconCode} />
                  <p className={styles.boxAbout__text}>
                    Проект выполнен за 10 часов
                  </p>
                </li>
                <li>
                  <IconCode className={styles.boxAbout__iconCode} />
                  <p className={styles.boxAbout__text}></p>
                </li>
                <li>
                  <IconCode className={styles.boxAbout__iconCode} />
                  <p className={styles.boxAbout__text}></p>
                </li>
              </ul>
            </div>
            <div className={styles.boxAbout}>
              <h4 className={styles.boxSteck__title}>Стек</h4>

              <p className={styles.boxSteck__text}>
                <span className={styles.boxSteck__span}>[</span>
                HTML, CSS, SASS
                <span className={styles.boxSteck__span}>]</span>
              </p>
            </div>
          </div>
        </li>
        <li className={styles.projects__item}>
          <IconProject className={styles.projects__icon} />
          <div className={styles.projects__about}>
            <div className={styles.projects__box}>
              <a
                className={styles.projects__link}
                href="https://lesnov-petr.github.io/project-Ice-Cream/"
                target="_blank"
                rel="noreferrer"
              >
                <span>Ice Cream</span>
                <IconLink className={styles.projects__iconLink} />
              </a>
            </div>
            <div className={styles.boxAbout}>
              <h4 className={styles.boxAbout__title}>Задачи</h4>
              <ul className={styles.boxAbout__listAbout}>
                <li className={styles.boxAbout__item}>
                  <IconCode className={styles.boxAbout__iconCode} />
                  <p className={styles.boxAbout__text}>
                    Верстка по шаблону Figma
                  </p>
                </li>
                <li>
                  <IconCode className={styles.boxAbout__iconCode} />
                  <p className={styles.boxAbout__text}></p>
                </li>
                <li>
                  <IconCode className={styles.boxAbout__iconCode} />
                  <p className={styles.boxAbout__text}></p>
                </li>
              </ul>
            </div>
            <div className={styles.boxAbout}>
              <h4 className={styles.boxAbout__title}>Достижения</h4>
              <ul className={styles.boxAbout__listAbout}>
                <li className={styles.boxAbout__item}>
                  <IconCode className={styles.boxAbout__iconCode} />
                  <p className={styles.boxAbout__text}>
                    Проект выполнен за 10 часов
                  </p>
                </li>
                <li>
                  <IconCode className={styles.boxAbout__iconCode} />
                  <p className={styles.boxAbout__text}></p>
                </li>
                <li>
                  <IconCode className={styles.boxAbout__iconCode} />
                  <p className={styles.boxAbout__text}></p>
                </li>
              </ul>
            </div>
            <div className={styles.boxAbout}>
              <h4 className={styles.boxSteck__title}>Стек</h4>

              <p className={styles.boxSteck__text}>
                <span className={styles.boxSteck__span}>[</span>
                HTML, CSS, SASS
                <span className={styles.boxSteck__span}>]</span>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
