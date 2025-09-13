import Loader from "./Loader";
import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import { TbSquareLetterS } from "react-icons/tb";
const SearchBar = ({ loading, searchValue, handleSearch, clearSearch }) => {
  return (
    <div>
      <div className={styles.searchContainer}>
        {loading ? <Loader /> : <FaSearch className={styles.icon} />}
        <input
          className={styles.input}
          type="input"
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
          <div className={styles.rightContainer}>
                          <span className={styles.iconS}>
                              <span className={styles.letter}>S</span>
                          </span>
            <span className={styles.text}>quick access</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;