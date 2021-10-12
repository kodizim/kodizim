import Link from "next/link";
import styles from "./element.module.css";

export default function NavbarElement({ name, link }) {
  return (
    <Link href={link}>
      <a className={styles.link}>{name}</a>
    </Link>
  );
}
