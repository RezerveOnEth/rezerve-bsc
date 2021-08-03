import styles from './Total.module.css';

import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Total = () => {
  return (
    <div className={styles.Total}>
      <div className={styles.Total__column}>
        <span>Total Circulating Supply</span>
        <div className={styles.Total__supply}>
          <div>------</div>
        </div>
      </div>
      <div className={styles.Total__column}>
        <span>RZRV Burned</span>
        <div className={styles.Total__burned}>
          <CircularProgressbar
            value={80}
            text={`${80}%`}
            styles={buildStyles({
              textSize: '14px',
              pathTransitionDuration: 0.5,
              pathTransition: '0.3s ease-in-out',
              pathColor: '#00CD98',
              textColor: '#00CD98',
              trailColor: '#EEEFF3',
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default Total;
