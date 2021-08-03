import styles from './Rate.module.css';

const Rate = () => {
  return (
    <div className={styles.Rate}>
      <header>
        <span className={styles.Rate__title}>Current Vault Swap Rate</span>
        <div className={styles.Rate__value}>
          <span>1 RZRV =</span>
          <span><span>----</span> DAI</span>
        </div>
      </header>
    </div>
  );
};

export default Rate;
