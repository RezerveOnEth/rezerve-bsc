import styles from './Vault.module.css';

const Vault = () => {
  return (
    <div className={styles.Vault}>
      <span>Total No. Burned</span>
      <span>DAI in Vault</span>
      <div className={styles.Vault__value}>
        <span>------</span>
      </div>
      <div className={styles.Vault__value}>
        <span>-----</span>
      </div>
    </div>
  );
};

export default Vault;
