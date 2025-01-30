import styles from "./BarTech.module.scss";
import { ReactComponent as IconCode } from "../../assets/image/iconCode.svg";

export default function BarSkills() {
  const techSkills = [
    [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Redux.js",
      "HTML5",
      "CSS3",
      "SASS",
      "GIT",
    ],
    ["Node.js", "Express.js", "Nestjs", "Sequelize", "PostgreSQL", "MongoDB"],
  ];
  return (
    <div className={styles.barTech}>
      <h3 className={styles.barTech__title}>НАВЫКИ</h3>
      <ul className={styles.barTech__list}>
        {techSkills.map((list) => {
          return (
            <div className={styles.barTech__boxSkills}>
              {list.map((skill) => {
                return (
                  <li className={styles.barTech__item}>
                    <IconCode className={styles.barTech__icon} />
                    {skill}
                  </li>
                );
              })}
            </div>
          );
        })}
      </ul>
    </div>
  );
}
