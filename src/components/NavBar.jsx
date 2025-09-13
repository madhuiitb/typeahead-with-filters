import styles from './NavBar.module.css';
import { FiSettings, FiUser } from "react-icons/fi";
import { MdAttachFile } from "react-icons/md";
import { useState } from 'react';
import FilterTabs from './FilterTabs';
import { PiChatCircle, PiList } from "react-icons/pi";

const NavBar = ({ activeTab, searchResultCounter, handleActiveTab }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rotated, setRotated] = useState(false);
  const [toggles, setToggles] = useState({
    files: true,
    people: true,
    chats: false,
    lists: false,
  });
    const hanldeModal = () => {
      setRotated(!rotated);
      setIsModalOpen(!isModalOpen);
      
  };

  const handleToggle = (id) => {
    setToggles((prev) => {
      return {
        ...prev,
        [id]: !prev[id],
      };
    });
  };
    
  return (
    <div className={styles.navContainer}>
      <div className={styles.filters}>
        <div
          className={`${styles.tab} ${activeTab["all"] ? styles.active : ""}`}
          onClick={() => handleActiveTab("all")}
        >
          <span>All</span>
          <span className={styles.counter}>{searchResultCounter.all}</span>
        </div>
        {toggles.files && (
          <div
            className={`${styles.tab} ${
              activeTab["files"] ? styles.active : ""
            }`}
            onClick={() => handleActiveTab("files")}
          >
            <span>
              <MdAttachFile className={`${styles.icon} ${styles.rotate}`} />
            </span>
            <span>Files</span>
            <span className={styles.counter}>{searchResultCounter.files}</span>
          </div>
        )}
        {toggles.people && (
          <div
            className={`${styles.tab} ${
              activeTab["people"] ? styles.active : ""
            }`}
            onClick={() => handleActiveTab("people")}
          >
            <span>
              <FiUser className={styles.icon} />
            </span>
            <span>People</span>
            <span className={styles.counter}>{searchResultCounter.people}</span>
          </div>
        )}
        {toggles.chats && (
          <div
            className={`${styles.tab} ${
              activeTab["chats"] ? styles.active : ""
            }`}
            onClick={() => handleActiveTab("chats")}
          >
            <span>
              <PiChatCircle className={styles.icon} />
            </span>
            <span>Chats</span>
            <span className={styles.counter}>{searchResultCounter.chats}</span>
          </div>
        )}
        {toggles.lists && (
          <div
            className={`${styles.tab} ${
              activeTab["lists"] ? styles.active : ""
            }`}
            onClick={() => handleActiveTab("lists")}
          >
            <span>
              <PiList className={styles.icon} />
            </span>
            <span>Lists</span>
            <span className={styles.counter}>{searchResultCounter.lists}</span>
          </div>
        )}
      </div>
      <div className={styles.settings} onClick={hanldeModal}>
        <span
          className={`${styles.iconWrapper} ${rotated ? styles.rotated : ""}`}
        >
          <FiSettings className={styles.icon} />
        </span>
        {isModalOpen && (
          <div onClick={(e) => e.stopPropagation()}>
            <FilterTabs handleToggle={handleToggle} toggles={toggles} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;