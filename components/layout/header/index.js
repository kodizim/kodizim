import Navbar from "../navbar";
import styles from "./index.module.css";
import Button from "@c/button";

function Header() {
  return (
    <div className={styles.header}>
      <Navbar />
      <div className={styles.btnWrapper}>
        <Button option="discord" />
      </div>
    </div>
  );
}

export default Header;
