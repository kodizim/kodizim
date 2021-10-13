import styles from "./index.module.css";
import { Developer } from "@svg";
import Button from "@c/button";

export default function Section() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.developer}>
        <Developer />
      </div>
      <div className={styles.content}>
        <h1 className={styles.header}>Kendini Kodlayarak Geliştir!</h1>
        <p className={styles.description}>
          Yazılım, tasarım ve teknoloji ile ilgilenen bireyleri bir araya
          getiren topluluk; “Kodizim”. Biz gibi öğrenci arkadaşlarımız ve
          sektörde aktif bireyler ile Network’umuzu genişletmek ve beraber
          gelişmek misyonumuzdur.
        </p>
        <div className={styles.btnWrapper}>
          <Button option="join" />
        </div>
      </div>
    </div>
  );
}
