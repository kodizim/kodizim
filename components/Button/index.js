import React from "react";

import styles from "./index.module.css";
import cn from "classnames";

import DiscordIcon from "@svg/DiscordIcon";

function Button({ main = true, discord }) {
  return (
    <>
      {main && !discord && <div className={cn(styles.main)}>Aramıza katıl</div>}
      {discord && (
        <div className={cn(styles.discord)}>
          <DiscordIcon />
          <p> Discord </p>
        </div>
      )}
    </>
  );
}

export default Button;
