import styles from "./event-card.module.css";

export default function EventCard({ data, info }) {
  //   console.log("osman", info);
  const html = `${info.description}`;

  const convertDate = (date) => {
    var d1 = date.split(" ");
    console.log(d1);
    // var date = d1[0].split("/");
    // var time = d1[1].split(":");
    // var dd = date[0];
    // var mm = date[1] - 1;
    // var yy = date[2];
    // var hh = time[0];
    // var min = time[1];
    // var ss = time[2];
    // return new Date("20" + yy, mm - 1, dd, hh, min, ss);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <img
          className={styles.eventImg}
          src={data.highlight_photo}
          alt="event photo"
        />
        <h1 className={styles.name}>{data.name}</h1>
      </div>
      <div className={styles.descWrapper}>
        <span>{convertDate(data.start_date.date)}</span>
        <p className={styles.descContent}>
          Yazılım, tasarım ve teknoloji ile ilgilenen bireyleri bir araya
          getiren topluluk; Kodizim. Teknoloji severler ve sektörü bir araya
          getirerek hem network genişletiyoruz, hem de beraber gelişiyoruz.
          Beraber gelişeceğimiz etkinliklerde görüşmek üzere!
        </p>
      </div>
    </div>
  );
}
