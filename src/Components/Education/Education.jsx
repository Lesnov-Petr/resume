import styles from "./Education.module.scss";

export default function Education() {
  const str = new RegExp('#"(.*?)"#', "g");
  const newStr = str.exec("МОСКОВСКАЯ ФИНАНСОВО ПРОМЫШЛЕННАЯ АКАДЕМИЯ  ");
  console.log(newStr);

  const education = [
    {
      id: 1,
      university: "УНИВЕРСИТЕТ ИСКУСТВЕННОГО ИНТЕЛЛЕКТА TERRA AI",
      year: 2025,
      faculty:
        "«Data scince, машинное обучение, нейронные сети и искуственный интелект»",
    },
    {
      id: 2,
      university: "GoIT",
      year: 2023,
      faculty: "«Full Stack Developer»",
    },
    {
      id: 3,
      university: "МОСКОВСКАЯ ФИНАНСОВО ПРОМЫШЛЕННАЯ АКАДЕМИЯ",
      year: 2010,
      faculty: "«Management»",
    },
  ];
  return (
    <div className={styles.education}>
      <h3 className={styles.education__title}>ОБРАЗОВАНИЕ</h3>
      <ul className={styles.education__list}>
        {education.map((item) => {
          return (
            <li className={styles.education__item}>
              <h4 className={styles.education__university}>
                {item.university} | {item.year}
              </h4>
              <p className={styles.education__faculty}>{`${item.faculty}`}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
