import styles from "./App.module.scss";
import BarContacts from "../BarContacts/BarContacts";
import BarTech from "../BarTech/BarTech";
import BarSofts from "../BarSofts/BarSofts";
import Summary from "../Summary/Summary";
import MyProjects from "../MyProjects/MyProjects";
import Experience from "../Experience/Experience";
import BoxFoto from "../BoxFoto/BoxFoto";
import MainTitle from "../MainTitle/MainTitle";

export default function App() {
  return (
    <div className={styles.App}>
      <div className={styles.boxBar}>
        <BoxFoto />
        <BarContacts />
        <BarTech />
        <BarSofts />
      </div>
      <div className={styles.boxAbout}>
        <MainTitle />
        <Summary />
        <MyProjects />
        <Experience />
      </div>
    </div>
  );
}
