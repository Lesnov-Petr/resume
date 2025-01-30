import styles from "./App.module.scss";
import BarContacts from "../BarContacts/BarContacts";
import BarTech from "../BarTech/BarTech";
import BarSofts from "../BarSofts/BarSofts";
import Summary from "../Summary/Summary";
import MyProjects from "../MyProjects/MyProjects";
// import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import MyLanguages from "../MyLanguages/MyLanguages";

export default function App() {
  return (
    <div className={styles.App}>
      <div className={styles.boxBar}>
        <BarTech />
        <Education />
        <MyLanguages />
        <BarSofts />
      </div>
      <div className={styles.boxAbout}>
        <BarContacts />
        <Summary />
        <MyProjects />
        {/* <Experience /> */}
      </div>
    </div>
  );
}
