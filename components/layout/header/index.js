import Navbar from "../navbar";
import styles from "./index.module.css";
import Button from "@c/Button";

function Header() {
  return (
    <header className={styles.header}>
      <Navbar />
      <div className={styles.btnWrapper}>
        <a
          href="https://discord.gg/kRX87hkBsm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button option="discord" />
        </a>
      </div>
    </header>
  );
}

export default Header;
