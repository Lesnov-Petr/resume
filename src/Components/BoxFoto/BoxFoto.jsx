import myFoto from "../../assets/image/myFoto.jpg";
import styles from "./BoxFoto.module.scss";

export default function BoxFoto() {
  return (
    <div className={styles.boxFoto}>
      <img className={styles.boxFoto__img} src={myFoto} alt="аватарка" />
    </div>
  );
}
