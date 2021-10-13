import styles from "./index.module.css";
import { CardInfo } from "@const";
import Card from "./card";

export default function Event() {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1>Kodizim Sana Neler Katabilir?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            volutpat at mi ac tempor. Nulla facilisi. Donec et urna at neque
            sagittis tempus non nec tellus. Cras porta, purus et gravida
            venenatis
          </p>
        </div>
        <div>
          {CardInfo &&
            CardInfo.map((card, i) => (
              <li key={card.title + i}>
                <Card title={card.title} desc={card.desc} />
              </li>
            ))}
        </div>
      </div>
    </div>
  );
}
