import styles from "./App.module.scss";
import BarContacts from "../BarContacts/BarContacts";
import BarTech from "../BarTech/BarTech";
import BarSofts from "../BarSofts/BarSofts";
import Summary from "../Summary/Summary";
import MyProjects from "../MyProjects/MyProjects";
import MainTitle from "../MainTitle/MainTitle";
import MyLanguages from "../MyLanguages/MyLanguages";

export default function App() {
  return (
    <div className={styles.App}>
      <div className={styles.boxBar}>
        <MainTitle />
        <BarTech />
        <MyLanguages />
        <BarSofts />
      </div>
      <div className={styles.boxAbout}>
        <BarContacts />
        <Summary />
        <MyProjects />
      </div>
    </div>
  );
}
