import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";

export default function Header({ title }) {
  return (
    <header id="header-colors" className={styles.appHeader}>
      <div className={styles.infoGrid}>
        <FontAwesomeIcon className={styles.appLogo} icon={faFilm} size="lg" />
        <h1>{title}</h1>
      </div>
    </header>
  );
}
