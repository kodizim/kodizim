import Navbar from "../navbar";
import styles from "./index.module.css";
import Button from "@c/Button";

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
