import styles from './SkeltonSearchCard.module.css';

const SkeltonSearchCard = () => {
    return (
      <div className={styles.skelton}>
        <div className={styles.circle}></div>
        <div className={styles.rightContainer}>
          <div className={styles.top}></div>
          <div className={styles.bottom}></div>
        </div>
      </div>
    );
}
export default SkeltonSearchCard;