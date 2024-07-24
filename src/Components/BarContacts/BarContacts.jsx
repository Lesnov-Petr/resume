import styles from "./BarContacts.module.scss";
import IconPhone from "../../assets/image/iconPhone.svg";
import IconMail from "../../assets/image/iconMail.svg";
import IconTelegram from "../../assets/image/iconTelegram.svg";
import IconGit from "../../assets/image/iconGit.svg";
import IconLocation from "../../assets/image/iconLocation.svg";

export default function BarContacts() {
  return (
    <div className={styles.barContacts}>
      <h3 className={styles.barContacts__title}>Контакты</h3>
      <ul className={styles.barContacts__list}>
        <li className={styles.barContacts__item}>
          <img
            className={styles.barContacts__icon}
            src={IconPhone}
            alt="phone"
          />
          <a
            href="tel: +7-917-522-00-03"
            alt="phone"
            className={styles.barContacts__link}
          >
            +7-917-522-00-03
          </a>
        </li>
        <li className={styles.barContacts__item}>
          <img className={styles.barContacts__icon} src={IconMail} alt="mail" />
          <a
            href="mailto: lesnov.p@gmail.com"
            className={styles.barContacts__link}
          >
            lesnov.p@gmail.com
          </a>
        </li>
        <li className={styles.barContacts__item}>
          <img
            className={styles.barContacts__icon}
            src={IconTelegram}
            alt="telegram"
          />
          <a
            href="tg://resolve?domain=LesnovPetr"
            className={styles.barContacts__link}
          >
            @LesnovPetr
          </a>
        </li>
        <li className={styles.barContacts__item}>
          <img
            className={styles.barContacts__icon}
            src={IconGit}
            alt="gitHub"
          />
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
          <img
            className={styles.barContacts__icon}
            src={IconLocation}
            alt="location"
          />
          <spam className={styles.barContacts__link}>Poccия, Москва</spam>
        </li>
      </ul>
    </div>
  );
}
