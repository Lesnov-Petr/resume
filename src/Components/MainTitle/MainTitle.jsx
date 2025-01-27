import styles from "./MainTitle.module.scss";
import { ReactComponent as IconJS } from "../../assets/image/iconJS.svg";

export default function MainTitle() {
  return (
    <div className={styles.mainTitle}>
      <h1 className={styles.mainTitle__name}>Леснов</h1>
      <h1 className={styles.mainTitle__name}>Пётр</h1>
      <div className={styles.mainTitle__boxProfession}>
        <IconJS className={styles.mainTitle__iconJS} />
        <h2 className={styles.mainTitle__profession}>FullStack-разработчик</h2>
      </div>
    </div>
  );
}
