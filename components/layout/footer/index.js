import React from "react";
import { Logo } from "@svg";
import Link from "next/link";
import styles from "./index.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <a href="mailto:info@kodizim.com">info@kodizim.com </a>
      <p className={styles.copyright}>© Copyright 2021 - Kodizim </p>
    </footer>
  );
}

export default Footer;
