import Logo from "@svg/Logo";
import styles from "./index.module.css";
import NavbarElement from "./element";
import { Nav } from "@const";

export default function Navbar() {
  console.log(Nav);
  return (
    <div className={styles.navWrapper}>
      <Logo />
      <nav>
        <ul className={styles.navList}>
          {Nav.map((n, i) => (
            <li key={n.name + i}>
              <NavbarElement name={n.name} link={n.link} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
