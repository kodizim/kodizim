import styles from "./card.module.css";
import DiscordEvent from "@svg/DiscordEvent";
import PairProgramming from "@svg/PairProgramingEvent";
import WorkshopEvent from "@svg/WorkshopEvent";

export default function Card({ title, desc, variant }) {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{desc}</p>
    </div>
  );
}
