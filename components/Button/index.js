import styles from "./index.module.css";
import cn from "classnames";

import DiscordIcon from "@svg/DiscordIcon";
import ArrowRight from "@svg/ArrowRight";

function Button(option) {
  return (
    <>
      {!option && <div className={cn(styles.main)}>{option}</div>}
      {option.main && <div className={cn(styles.main)}>Aramıza katıl</div>}
      {option.discord && (
        <div className={cn(styles.discord)}>
          <DiscordIcon />
          <p> Discord </p>
        </div>
      )}
      {option.join && (
        <div className={cn(styles.join)}>
          <p> Etkinlikler </p>
          <ArrowRight />
        </div>
      )}
    </>
  );
}

export default Button;
