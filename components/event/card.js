import styles from "./card.module.css";

export default function Card({ title, desc, children }) {
  return (
    <div className={styles.wrapper}>
      {children}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{desc}</p>
    </div>
  );
}
