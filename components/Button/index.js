import styles from "./index.module.css";
import cn from "classnames";

import { ArrowRight, DiscordIcon } from "@svg";

function Button({ children = "Aramıza Katıl", option, bgOnShadow }) {
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
        <div className={cn(styles.join, bgOnShadow && styles.bgOnShadow)}>
          <p> {children} </p>
          <ArrowRight />
        </div>
      )}
      {option === "joinEvent" && (
        <div className={cn(styles.joinEvent, bgOnShadow && styles.bgOnShadow)}>
          <p> {children} </p>
          <ArrowRight />
        </div>
      )}
    </>
  );
}

export default Button;
