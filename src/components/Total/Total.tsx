import styles from './Total.module.css';

const Total = () => {
  return (
    <div className={styles.Total}>
      <span>Total Circulating Supply</span>
      <span>RZRV Burned</span>
      <div className={styles.Total__supply}>
        <span>------</span>
      </div>
      <div className={styles.Total__burned}>---</div>
    </div>
  );
};

export default Total;
