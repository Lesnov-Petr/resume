import styles from "./Summary.module.scss";

export default function Summary() {
  return (
    <div className={styles.summary}>
      <h3 className={styles.summary__title}>О себе</h3>
      <p className={styles.summary__about}>
        Веб-разработчик с необходимым арсеналом навыков и знаний инструментов,
        для реализации веб-приложений (Front-end, Back-end). Люблю работать и
        добиваться результатов. Всегда стремлюсь к получению новых знаний и
        навыков!
      </p>
    </div>
  );
}
