import styles from "./MyProjects.module.scss";
import { ReactComponent as IconProject } from "../../assets/image/iconPoject.svg";

export default function MyProjects() {
  return (
    <div className={styles.projects}>
      <h3 className={styles.projects__title}>Проекты (завершенные):</h3>
      <ul className={styles.projects__list}>
        <li className={styles.projects__item}>
          <a
            className={styles.projects__link}
            href="https://slimmom5group.netlify.app/"
            alt="slim mom"
            target="_blank"
            rel="noreferrer"
          >
            <IconProject
              className={styles.projects__icon}
              src={IconProject}
              alt="iconProject"
            />
            <p className={styles.projects__linkName}>
              Slim Mom (Ешь и будь в форме)
            </p>
          </a>
          <h4
            className={
              styles.projects__title + " " + styles.projects__titleItem
            }
          >
            Стек :
          </h4>
          <p
            className={
              styles.projects__description + " " + styles.projects__tech
            }
          >
            [ React, Redux, Nodejs, Express.js, MongoDB ]
          </p>
          <h4
            className={
              styles.projects__title + " " + styles.projects__titleItem
            }
          >
            Задача :
          </h4>
          <p className={styles.projects__description}>
            Создать архитектурe проекта (front-end, back-end) с нуля, на
            основании макета в графическом редакторе Figma
          </p>
          <h4
            className={
              styles.projects__title + " " + styles.projects__titleItem
            }
          >
            Достижения :
          </h4>
          <p className={styles.projects__description}>
            Создал Back-end на платформе{" "}
            <span className={styles.projects__tech}>Node.js</span> и библиотеки
            <span className={styles.projects__tech}> Express.js</span>.
            Front-end реализовал на основе библиотеки
            <span className={styles.projects__tech}> React.js</span> и стейт
            менеджера <span className={styles.projects__tech}>Redux.js</span>.
            <span className={styles.projects__tech}> MongoDB</span> выступила
            системой управления базами данных.
          </p>
        </li>
        <li className={styles.projects__item}>
          <a
            className={styles.projects__link}
            href="https://lesnov-petr.github.io/project-Ice-Cream/"
            alt="IceCream"
            target="_blank"
            rel="noreferrer"
          >
            <IconProject
              className={styles.projects__icon}
              src={IconProject}
              alt="iconProject"
            />
            <p className={styles.projects__linkName}>Ice-Cream (мороженное)</p>
          </a>
          <h4
            className={
              styles.projects__title + " " + styles.projects__titleItem
            }
          >
            Стек :
          </h4>
          <p
            className={
              styles.projects__description + " " + styles.projects__tech
            }
          >
            [ HTML5, CSS3, SASS ]
          </p>
          <h4
            className={
              styles.projects__title + " " + styles.projects__titleItem
            }
          >
            Задача :
          </h4>
          <p className={styles.projects__description}>
            Верстка визитки на основании графического редактора
            <span className={styles.projects__tech}> Figma</span>
          </p>
          <h4
            className={
              styles.projects__title + " " + styles.projects__titleItem
            }
          >
            Достижения :
          </h4>
          <p className={styles.projects__description}>
            Задача была выполнина в кратчайшие сроки и передана заказчику.
          </p>
        </li>
        <li className={styles.projects__item}>
          <a
            className={styles.projects__link}
            href="https://lesnov-petr.github.io/WebStudio/"
            alt="WebStudio"
            target="_blank"
            rel="noreferrer"
          >
            <IconProject
              className={styles.projects__icon}
              src={IconProject}
              alt="iconProject"
            />
            <p className={styles.projects__linkName}>
              Web Studio (визитная карточка)
            </p>
          </a>
          <h4
            className={
              styles.projects__title + " " + styles.projects__titleItem
            }
          >
            Стек :
          </h4>
          <p
            className={
              styles.projects__description + " " + styles.projects__tech
            }
          >
            [ HTML5, CSS3, SASS ]
          </p>
          <h4
            className={
              styles.projects__title + " " + styles.projects__titleItem
            }
          >
            Задача :
          </h4>
          <p className={styles.projects__description}>
            Верстка сайта (визитка) для WebStudio. Важное внимание уделить
            верстке.
          </p>
          <h4
            className={
              styles.projects__title + " " + styles.projects__titleItem
            }
          >
            Достижения :
          </h4>
          <p className={styles.projects__description}>
            Задача была выполнина в кратчайшие сроки и передана заказчику.
          </p>
        </li>
      </ul>
    </div>
  );
}
