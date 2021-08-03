import styles from './Total.module.css';

import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Total = () => {
  return (
    <div className={styles.Total}>
      <span>Total Circulating Supply</span>
      <span>RZRV Burned</span>
      <div className={styles.Total__supply}>
        <span>------</span>
      </div>
      <div className={styles.Total__burned}>
        <CircularProgressbar
          value={80}
          text={`${80}%`}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            // rotation: 0.25,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            // strokeLinecap: 'butt',

            // Text size
            textSize: '14px',

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            pathTransition: '0.4s ease-in-out',

            // Colors
            pathColor: '#00CD98',
            textColor: '#00CD98',
            trailColor: '#EEEFF3',

            // backgroundColor: '#00CD98',
          })}
        />
      </div>
    </div>
  );
};

export default Total;
