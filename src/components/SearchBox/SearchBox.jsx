import { useState } from "react";
import styles from "./SearchBox.module.css";

export default function SearchBox({ searchFunction }) {
  const [searchText, setSearchText] = useState("");

  function handleSearchTextChange(event) {
    const newValue = event.target.value;
    setSearchText(newValue);
  }

  function handleSearch(event) {
    if ((event.key === "Enter" || event.type === "click") && searchText.trim()) {
      searchFunction(searchText.trim());
    }
  }

  return (
    <div id={styles.searchDiv}>
      <input
        id={styles.input}
        type="text"
        placeholder="Search for a movie..."
        value={searchText}
        onChange={handleSearchTextChange}
        onKeyDown={handleSearch}
      />
      <button id={styles.searchButton} onClick={handleSearch} disabled={!searchText.trim()}>
        Search
      </button>
    </div>
  );
}
