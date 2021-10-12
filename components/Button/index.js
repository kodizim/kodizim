import React from "react";

import styles from "./index.module.css";
import cn from "classnames";

function Button({ active }) {
  return (
    <div className={cn(styles.main, active && styles.active)}>
      Aramıza katıl
    </div>
  );
}

export default Button;
