import Loader from "./Loader";
import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
const SearchBar = ({ loading, searchValue, handleSearch, clearSearch }) => {
  return (
    <div>
      <div className={styles.searchContainer}>
        {loading ? <Loader /> : <FaSearch className={styles.icon} />}
        <input
          className={styles.input}
          type="search"
          name="search"
          placeholder="Seaching is easier"
          onChange={(e) => handleSearch(e.target.value)}
          value={searchValue}
        />
        {searchValue ? (
          <button className={styles.button} onClick={clearSearch}>
            clear
          </button>
        ) : (
          <div>quick access</div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;