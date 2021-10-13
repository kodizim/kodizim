import styles from "./card.module.css";
import EventIcon from "./event-icon";

export default function Card({ title, desc, index }) {
  return (
    <div className={styles.wrapper}>
      <EventIcon index={index} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{desc}</p>
    </div>
  );
}
