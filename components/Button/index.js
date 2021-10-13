import styles from "./index.module.css";
import cn from "classnames";

import DiscordIcon from "@svg/DiscordIcon";
import { ArrowRight } from "@svg";

function Button(children = "Aramıza Katıl", option = "main") {
  return (
    <>
      {option === "main" && <div className={cn(styles.main)}>{children} </div>}
      {option === "discord" && (
        <div className={cn(styles.discord)}>
          <DiscordIcon />
          <p> Discord </p>
        </div>
      )}
      {option === "join" && (
        <div className={cn(styles.join)}>
          <p> Etkinlikler </p>
          <ArrowRight />
        </div>
      )}
    </>
  );
}

export default Button;
