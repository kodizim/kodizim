import styles from "./index.module.css";
import { CardInfo } from "@const";
import Card from "./card";

export default function Event() {
  return (
    <section className={styles.wrapper}>
      <article className={styles.header}>
        <h1 className={styles.headTitle}>Kodizim Sana Neler Katabilir?</h1>
        <p className={styles.headDesc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          volutpat at mi ac tempor. Nulla facilisi. Donec et urna at neque
          sagittis tempus non nec tellus. Cras porta, purus et gravida venenatis
        </p>
      </article>
      <section className={styles.cardsWrapper}>
        {CardInfo &&
          CardInfo.map((card, i) => (
            <Card
              key={card.title + card.variant}
              title={card.title}
              desc={card.desc}
            >
              <img src={`/assets/images/${card.variant}.png`} />
            </Card>
          ))}
      </section>
    </section>
  );
}
