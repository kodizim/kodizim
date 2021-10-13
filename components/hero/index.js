import React from "react";
import styles from "./index.module.css";
import Button from "@c/button";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGrid}>
        <article className={styles.left}>
          <h1>İzini Kod’a Bırak! </h1>
          <p>
            Yazılım, tasarım ve teknoloji ile ilgilenenleri bir araya getiren
            topluluk olma yolunda ilerliyoruz! Network ve tecrübelerinizi
            paylaşmaya var mısınız?
          </p>
          <Button option="main" />
        </article>
        <figure className={styles.imgContainer}>
          <img className={styles.image} src="/assets/images/illustration.png" />
        </figure>
      </div>
    </section>
  );
}

export default Hero;
