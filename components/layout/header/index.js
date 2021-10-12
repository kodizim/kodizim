import Navbar from "../navbar";
import styles from "./index.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <Navbar />
      <div className="flex">discord</div>
    </div>
  );
}

export default Header;
