import React from "react";
import styles from "./index.module.css";
import { LinkedIn, Twitter, Instagram } from "@svg";
import Link from "next/link";
function SocialMedia() {
  return (
    <section className={styles.social}>
      <article>
        <h2> Sosyal Medya Hesaplarımız</h2>
        <p>
          Sosyal medyadan bizi takip ederek etkinliklerimizi, yaptigimiz discord
          etkinliklerini takip edebilirsiniz.
        </p>
        <div className={styles.iconsWrapper}>
          <Link href="">
            <div>
              <LinkedIn />
            </div>
          </Link>
          <Link href="">
            <div>
              <Twitter />
            </div>
          </Link>
          <Link href="">
            <div>
              <Instagram />
            </div>
          </Link>
        </div>
      </article>
    </section>
  );
}

export default SocialMedia;
