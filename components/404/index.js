import React from "react";
import styles from "./index.module.css";
import { useRouter } from "next/router";

function ErrorComponent() {
  const router = useRouter();

  return (
    <div className={styles.error}>
      {router.pathname} Aradığınız {router.asPath} bulunamadı
    </div>
  );
}

export default ErrorComponent;
