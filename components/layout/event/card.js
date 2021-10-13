import styles from "./card.module.css";
//<Event variant={variant} />;

export default function Card({ title, desc, variant }) {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{desc}</p>
    </div>
  );
}
