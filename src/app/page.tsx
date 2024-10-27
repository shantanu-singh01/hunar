import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar.js";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.home}>
       <Navbar />
      </div>
    </div>
  );
}
