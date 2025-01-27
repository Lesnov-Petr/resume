import styles from "./MyProjects.module.scss";
import { ReactComponent as IconProject } from "../../assets/image/iconPoject.svg";
import { ReactComponent as IconCode } from "../../assets/image/iconCode.svg";
import { ReactComponent as IconLink } from "../../assets/image/iconLink.svg";
export default function MyProjects() {
  return (
    <div className={styles.projects}>
      <h3 className={styles.projects__title}>
        <span className={styles.projects__title__span}>Проекты</span>
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
          <div className={styles.projects__about}>
            <div className={styles.projects__box}>
              <a
                className={styles.projects__link}
                href="https://slimmom5group.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <span>FitBook (Ешь и будь в форме) </span>
                <IconLink className={styles.projects__iconLink} />
              </a>
            </div>
            <div className={styles.boxSteck}>
              <h4 className={styles.boxSteck__title}>Стек :</h4>
              <p className={styles.boxSteck__text}>
                <span className={styles.boxSteck__span}>[</span>
                React, Redux, Nodejs, Express.js, MongoDB
                <span className={styles.boxSteck__span}>]</span>
              </p>
            </div>
            <div className={styles.boxAbout}>
              <h4 className={styles.boxAbout__title}>Задачи</h4>
              <ul className={styles.boxAbout__listAbout}>
                <li className={styles.boxAbout__item}>
                  <IconCode className={styles.boxAbout__iconCode} />
                  <p className={styles.boxAbout__text}>
                    Реализовать проект FitBook, на основании макета в
                    графическом редакторе Figma.
                  </p>
                </li>
                <li className={styles.boxAbout__item}>
                  <IconCode className={styles.boxAbout__iconCode} />
                  <p className={styles.boxAbout__text}>
                    Адаптивность для трех эндпоинтов (1200px; 768px;480px)
                  </p>
                </li>
                <li className={styles.boxAbout__item}>
                  <IconCode className={styles.boxAbout__iconCode} />
                  <p className={styles.boxAbout__text}>
                    FrontEnd на основе библиотеки Reactjs
                  </p>
                </li>
                <li className={styles.boxAbout__item}>
                  <IconCode className={styles.boxAbout__iconCode} />
                  <p className={styles.boxAbout__text}>
                    Backend на платформе Nodejs
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles.boxAbout}>
              <h4 className={styles.boxAbout__title}>Достижения</h4>
              <ul className={styles.boxAbout__listAbout}>
                <li className={styles.boxAbout__item}>
                  <IconCode className={styles.boxAbout__iconCode} />
                  <p className={styles.boxAbout__text}>
                    Frontend реализовал на основе библиотеки React.js и стейт
                    менеджера Redux.js.
                  </p>
                </li>
                <li className={styles.boxAbout__item}>
                  <IconCode className={styles.boxAbout__iconCode} />
                  <p className={styles.boxAbout__text}>
                    Backend создал на платформе Node.js и библиотеки Express.js.
                  </p>
                </li>

                <li className={styles.boxAbout__item}>
                  <IconCode className={styles.boxAbout__iconCode} />
                  <p className={styles.boxAbout__text}>
                    MongoDB выступила системой управления базами данных.
                  </p>
                </li>
              </ul>
            </div>
          </div>
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
                <span>Web Studio (визитка) </span>
                <IconLink className={styles.projects__iconLink} />
              </a>
            </div>
            <div className={styles.boxSteck}>
              <h4 className={styles.boxSteck__title}>Стек :</h4>
              <p className={styles.boxSteck__text}>
                <span className={styles.boxSteck__span}>[</span>
                HTML, CSS, SASS
                <span className={styles.boxSteck__span}>]</span>
              </p>
            </div>
            <div className={styles.boxAbout}>
              <h4 className={styles.boxAbout__title}>Задачи</h4>
              <ul className={styles.boxAbout__listAbout}>
                <li className={styles.boxAbout__item}>
                  <IconCode className={styles.boxAbout__iconCode} />
                  <p className={styles.boxAbout__text}>
                    Верстка сайта (визитка) для WebStudio по макету Figma
                  </p>
                </li>
                <li className={styles.boxAbout__item}>
                  <IconCode className={styles.boxAbout__iconCode} />
                  <p className={styles.boxAbout__text}>
                    Адаптивность для трех эндпоинтов (1200px; 768px;480px)
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles.boxAbout}>
              <h4 className={styles.boxAbout__title}>Достижения</h4>
              <ul className={styles.boxAbout__listAbout}>
                <li className={styles.boxAbout__item}>
                  <IconCode className={styles.boxAbout__iconCode} />
                  <p className={styles.boxAbout__text}>
                    Задача была выполнина в полном объеме за 10 часов и передана
                    заказчику.
                  </p>
                </li>
              </ul>
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
                <span>Ice Cream (мороженное)</span>
                <IconLink className={styles.projects__iconLink} />
              </a>
            </div>
            <div className={styles.boxSteck}>
              <h4 className={styles.boxSteck__title}>Стек :</h4>
              <p className={styles.boxSteck__text}>
                <span className={styles.boxSteck__span}>[</span>
                HTML, CSS, SASS
                <span className={styles.boxSteck__span}>]</span>
              </p>
            </div>
            <div className={styles.boxAbout}>
              <h4 className={styles.boxAbout__title}>Задачи</h4>
              <ul className={styles.boxAbout__listAbout}>
                <li className={styles.boxAbout__item}>
                  <IconCode className={styles.boxAbout__iconCode} />
                  <p className={styles.boxAbout__text}>
                    Адаптивность для трех эндпоинтов (1200px; 768px;480px)
                  </p>
                </li>
                <li className={styles.boxAbout__item}>
                  <IconCode className={styles.boxAbout__iconCode} />
                  <p className={styles.boxAbout__text}>
                    Серстать сайт по макету Figma
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles.boxAbout}>
              <h4 className={styles.boxAbout__title}>Достижения</h4>
              <ul className={styles.boxAbout__listAbout}>
                <li className={styles.boxAbout__item}>
                  <IconCode className={styles.boxAbout__iconCode} />
                  <p className={styles.boxAbout__text}>
                    Заказ выполнен за 8 часов и передан заказчику.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
