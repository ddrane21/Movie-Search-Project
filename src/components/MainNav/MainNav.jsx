import { Link, NavLink } from "react-router-dom";
import styles from "./MainNav.module.css";

export default function MainNav() {
  return (
    <nav id="main-nav" className={styles.navList}>
      <div className={styles.navLink}>
        <NavLink to="/popular">Popular Movies</NavLink>
      </div>
      <div className={styles.navLink}>
        <NavLink to="/in_theaters">Now Playing</NavLink>
      </div>
    </nav>
  );
}
