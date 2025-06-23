import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";
import SearchBox from "../SearchBox/SearchBox";

export default function Header({ title, onSearch }) {
  return (
    <header id="header-colors" className={styles.appHeader}>
      <div className={styles.infoGrid}>
        <FontAwesomeIcon className={styles.appLogo} icon={faFilm} size="lg" />
        <h1>{title}</h1>
        <SearchBox searchFunction={onSearch} />
      </div>
    </header>
  );
}
