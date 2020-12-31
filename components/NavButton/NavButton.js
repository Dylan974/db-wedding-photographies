import Link from "next/link";
import styles from "./NavButton.module.css";

const NavButton = (props) => (
  <Link href={props.path}>
    <div className={styles.NavButton}>
      <div className={styles.Icon}>{props.icon}</div>
      <span className={styles.Label}>{props.label}</span>
    </div>
  </Link>
);

export default NavButton;
