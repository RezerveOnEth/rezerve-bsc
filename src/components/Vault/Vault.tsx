import styles from './Vault.module.css';

const Vault = () => {
  return (
    <div className={styles.Vault}>
      <div className={styles.Vault__column}>
        <span>Total No. Burned</span>
        <div className={styles.Vault__value}>
          <div>------</div>
        </div>
      </div>
      <div className={styles.Vault__column}>
        <span>DAI in Vault</span>
        <div className={styles.Vault__value}>
          <div>-----</div>
        </div>
      </div>
    </div>
  );
};

export default Vault;
