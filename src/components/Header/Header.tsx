import styles from './Header.module.css';

import {Dispatch, SetStateAction} from 'react';
import Web3Modal from 'web3modal';
import Web3 from 'web3';

interface IHeader {
  web3Modal: Web3Modal;
  setWindowWeb3: Dispatch<SetStateAction<Web3 | undefined>>;
}

const Header = ({web3Modal, setWindowWeb3}: IHeader) => {
  const connectWeb3 = async () => {
    const provider = await web3Modal.connect();

    const web3 = new Web3(provider);

    setWindowWeb3(web3);
  };

  return (
    <header className={styles.Header}>
      <button
        className={styles.Header__connect}
        onClick={connectWeb3}
      >Connect Wallet</button>
    </header>
  );
};

export default Header;
