import styles from './ResultsCard.module.css';
import { FiExternalLink, FiLink } from "react-icons/fi";
import Tooltip from './Tooltip';
import { useState } from 'react';

const ResultsCard = ({ card }) => {

    const [showTooltip, setShowTooltip] = useState(false);

    const {
      file_name,
      edited_label,
      web_link,
      category,
      images,
    } = card;

    const handleCopy = (url) => {
        navigator.clipboard.writeText(url).then(() => {
            setShowTooltip(true);
            setTimeout(() => {
                setShowTooltip(false)
            }, 1500);
        }).catch((err) => console.log('Failed to copy', err));
    }
     return (
       <div className={styles.skelton}>
         <div className={styles.circle}>
                 <img src={images[0].url} alt={images[0].alt} />
         </div>
         <div className={styles.rightContainer}>
           <div className={styles.top}>{file_name}</div>
           <ul className={styles.bottom}>
             <li>{category[0]}</li>
             <li>{edited_label}</li>
           </ul>
         </div>
         <div className={styles.links}>
           <button onClick={() => handleCopy(web_link)} className={styles.copy}>
             <FiLink />
                 </button>
                 {showTooltip&& <Tooltip />}
           <a href={web_link} target="_blank" className={styles.newtab}>
             <FiExternalLink /> New Tab
           </a>
         </div>
       </div>
     );
}

export default ResultsCard;