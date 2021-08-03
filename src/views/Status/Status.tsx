import styles from './Status.module.css';

import Rate from '../../components/Rate/Rate';
import Total from '../../components/Total/Total';
import Vault from '../../components/Vault/Vault';

const Status = () => {
  return (
    <div className={styles.Status}>
      <header className={styles.Status__header}>
        <button className={styles.Status__connect}>Connect Wallet</button>
      </header>
      <div className={styles.Status__greeting}>
        <h1 className={styles.Status__title}>
          Welcome to <strong>THE VAULT.</strong>
        </h1>
        <h2 className={styles.Status__subtitle}>
          Please familiarize yourself with the Vault Swap contract prior to interacting with the vault.
        </h2>
      </div>
      <div className={styles.Status__widgets}>
        <Total/>
        <Vault/>
        <Rate/>
      </div>
    </div>
  );
};

export default Status;
