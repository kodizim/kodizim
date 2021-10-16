import EventCard from "./event-card";
import styles from "./index.module.css";

export default function EventsLayout(props) {
  const p = props;
  return (
    <div className={styles.wrapper}>
      {p.data?.events.map((e, i) => (
        <EventCard key={i} data={e} info={p.data} />
      ))}
    </div>
  );
}
