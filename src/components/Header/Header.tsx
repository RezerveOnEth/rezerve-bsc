import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.Header}>
      <button className={styles.Header__connect}>Connect Wallet</button>
    </header>
  );
};

export default Header;
