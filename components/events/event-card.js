import Link from "next/link";
import styles from "./event-card.module.css";
import Button from "@c/Button";

export default function EventCard({ data, info }) {
  const av = data.latest_users && data.latest_users.slice(0, 3);

  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <img
          className={styles.eventImg}
          src={data.highlight_photo}
          alt="event photo"
        />
      </div>
      <div className={styles.descWrapper}>
        <h1 className={styles.name}>{data.name}</h1>
        <p className={styles.descContent}>
          Yazılım, tasarım ve teknoloji ile ilgilenen bireyleri bir araya
          getiren topluluk; Kodizim. Teknoloji severler ve sektörü bir araya
          getirerek hem network genişletiyoruz, hem de beraber gelişiyoruz.
          Beraber gelişeceğimiz etkinliklerde görüşmek üzere!
        </p>
        <div className={styles.bottom}>
          <div className={styles.avatar}>
            {av?.map((a, i) => (
              <img
                className={styles.avatarImg}
                key={i + a.avatar}
                src={a.avatar || ""}
              />
            )) || <div></div>}
          </div>
          <div>
            <a
              href="https://kommunity.com/kodizim/events/bursa-kodizim-lansman-ecea7037"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button option="joinEvent" bgOnShadow>
                Sen de Katıl
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
