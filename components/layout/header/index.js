import Navbar from "../navbar";
import styles from "./index.module.css";
import Button from "@c/button";

function Header() {
  return (
    <header className={styles.header}>
      <Navbar />
      <div className={styles.btnWrapper}>
        <Button option="discord" />
      </div>
    </header>
  );
}

export default Header;
