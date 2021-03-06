import { Logo } from "@svg";
import styles from "./index.module.css";
import NavbarElement from "./element";
import { Nav } from "@const";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.navWrapper}>
      <div className={styles.logoWrap}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </div>
      <nav>
        <ul className={styles.navList}>
          {Nav &&
            Nav.map((n, i) => (
              <li key={n.name + i}>
                <NavbarElement name={n.name} link={n.link} />
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}
