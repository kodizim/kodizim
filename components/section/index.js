import styles from "./index.module.css";
import Button from "@c/Button";

export default function Section() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.developer}>
        <figure>
          <img
            className={styles.image}
            alt="kodizm"
            src="/assets/images/developer.png"
          />
        </figure>
      </div>
      <article className={styles.content}>
        <h1 className={styles.header}>Kendini Kodlayarak Geliştir!</h1>
        <p className={styles.description}>
          Yazılım, tasarım ve teknoloji ile ilgilenen bireyleri bir araya
          getiren topluluk; “Kodizim”. Biz gibi öğrenci arkadaşlarımız ve
          sektörde aktif bireyler ile Network’umuzu genişletmek ve beraber
          gelişmek misyonumuzdur.
        </p>
        <div className={styles.btnWrapper}>
          <a
            href="https://kommunity.com/kodizim/events/bursa-kodizim-lansman-ecea7037"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button option="join" bgOnShadow />
          </a>
        </div>
      </article>
    </section>
  );
}
