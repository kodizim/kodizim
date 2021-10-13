import styles from "./index.module.css";
import { CardInfo } from "@const";
import Card from "./card";

export default function Event() {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.headTitle}>Kodizim Sana Neler Katabilir?</h1>
          <p className={styles.headDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            volutpat at mi ac tempor. Nulla facilisi. Donec et urna at neque
            sagittis tempus non nec tellus. Cras porta, purus et gravida
            venenatis
          </p>
        </div>
        <div className={styles.cardsWrapper}>
          {CardInfo &&
            CardInfo.map((card, i) => (
              <li key={card.title + card.variant}>
                <Card
                  title={card.title}
                  desc={card.desc}
                  variant={card.variant}
                />
              </li>
            ))}
        </div>
      </div>
    </div>
  );
}
