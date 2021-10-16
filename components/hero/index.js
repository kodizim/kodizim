import React from "react";
import styles from "./index.module.css";
import Button from "@c/Button";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGrid}>
        <article className={styles.left}>
          <h1>
            İzini <br /> Kod’a <br /> Bırak!
          </h1>
          <p>
            Yazılım, tasarım ve teknoloji ile ilgilenenleri bir araya getiren
            topluluk olma yolunda ilerliyoruz! Network ve tecrübelerinizi
            paylaşmaya var mısınız?
          </p>
          <a
            href="https://kommunity.com/kodizim/events/bursa-kodizim-lansman-ecea7037"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button option="join"> Aramıza Katıl</Button>
          </a>
        </article>
        <div className={styles.imgContainer}>
          <figure>
            <img
              className={styles.image}
              src="/assets/images/illustration.png"
              alt="kodizm"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Hero;
