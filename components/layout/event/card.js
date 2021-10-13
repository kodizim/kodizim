import styles from "./card.module.css";
import DiscordEvent from "@svg/DiscordEvent";

export default function Card({ title, desc }) {
  return (
    <div className={styles.wrapper}>
      <DiscordEvent />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{desc}</p>
    </div>
  );
}
