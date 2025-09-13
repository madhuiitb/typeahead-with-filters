import styles from './FilterTabs.module.css';
import { MdAttachFile } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { FaToggleOn } from "react-icons/fa";
import { PiChatCircle, PiList } from "react-icons/pi";
import { FaToggleOff } from "react-icons/fa6";

const FilterTabs = ({ toggles,handleToggle }) => {
  return (
    <div className={styles.container}>
      <div className={styles.tab}>
        <div className={styles.iconText}>
          <span>
            <MdAttachFile className={`${styles.icon} ${styles.rotate}`} />
          </span>
          <span className={styles.field}>Files</span>
        </div>
        <span className={styles.toggle} onClick={() => handleToggle("files")}>
                  {toggles.files ? <FaToggleOn /> : <FaToggleOff />}
        </span>
      </div>
      <div className={styles.tab}>
        <div className={styles.iconText}>
          <span>
            <FiUser className={styles.icon} />
          </span>
          <span className={styles.field}>People</span>
        </div>
      <span className={styles.toggle} onClick={() => handleToggle("people")}>
                  {toggles.people ? <FaToggleOn /> : <FaToggleOff />}
        </span>
      </div>
      <div className={styles.tab}>
        <div className={styles.iconText}>
          <span>
            <PiChatCircle className={styles.icon} />
          </span>
          <span className={styles.field}>Chats</span>
        </div>
      <span className={styles.toggle} onClick={() => handleToggle("chats")}>
                  {toggles.chats ? <FaToggleOn /> : <FaToggleOff />}
        </span>
      </div>
      <div className={styles.tab}>
        <div className={styles.iconText}>
          <span>
            <PiList className={styles.icon} />
          </span>
          <span className={styles.field}>Lists</span>
        </div>
      <span className={styles.toggle} onClick={() => handleToggle("lists")}>
                  {toggles.lists ? <FaToggleOn /> : <FaToggleOff />}
        </span>
      </div>
    </div>
  );
};

export default FilterTabs;