import styles from "./BarContacts.module.scss";
import { ReactComponent as IconPhone } from "../../assets/image/iconPhone.svg";
import { ReactComponent as IconMail } from "../../assets/image/iconMail.svg";
import { ReactComponent as IconTelegram } from "../../assets/image/iconTelegram.svg";
import { ReactComponent as IconGit } from "../../assets/image/iconGit.svg";
import { ReactComponent as IconLocation } from "../../assets/image/iconLocation.svg";
import { ReactComponent as IconJS } from "../../assets/image/iconJS.svg";
import BoxFoto from "../BoxFoto/BoxFoto";

export default function BarContacts() {
  return (
    <div className={styles.barContacts}>
      <BoxFoto />
      <div className={styles.mainTitle}>
        <h1 className={styles.mainTitle__name}>Леснов</h1>
        <h1 className={styles.mainTitle__name}>Пётр</h1>
        <div className={styles.mainTitle__boxProfession}>
          <IconJS className={styles.mainTitle__iconJS} />
          <h2 className={styles.mainTitle__profession}>
            FullStack-разработчик
          </h2>
        </div>
      </div>
      <div>
        <h3 className={styles.barContacts__title}>Контакты</h3>
        <ul className={styles.barContacts__list}>
          <li className={styles.barContacts__item}>
            <IconPhone className={styles.barContacts__icon} />
            <a
              href="tel: +7-917-522-00-03"
              alt="phone"
              className={styles.barContacts__link}
            >
              +7-917-522-00-03
            </a>
          </li>
          <li className={styles.barContacts__item}>
            <IconMail className={styles.barContacts__icon} />
            <a
              href="mailto: lesnov.p@gmail.com"
              className={styles.barContacts__link}
            >
              lesnov.p@gmail.com
            </a>
          </li>
          <li className={styles.barContacts__item}>
            <IconTelegram className={styles.barContacts__icon} />
            <a
              href="tg://resolve?domain=LesnovPetr"
              className={styles.barContacts__link}
            >
              @LesnovPetr
            </a>
          </li>
          <li className={styles.barContacts__item}>
            <IconGit className={styles.barContacts__icon} />
            <a
              className={styles.barContacts__link}
              target="_blank"
              href="https://github.com/Lesnov-Petr"
              alt="source"
              rel="noreferrer"
            >
              GitHub LesnovPetr
            </a>
          </li>
          <li className={styles.barContacts__item}>
            <IconLocation className={styles.barContacts__icon} />
            <spam className={styles.barContacts__link}>Poccия, Москва</spam>
          </li>
        </ul>
      </div>
    </div>
  );
}
