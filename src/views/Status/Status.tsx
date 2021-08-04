import styles from './Status.module.css';

import Rate from '../../components/Rate/Rate';
import Total from '../../components/Total/Total';
import Vault from '../../components/Vault/Vault';
import Web3 from 'web3';
import {Dispatch, SetStateAction, useEffect, useState} from 'react';

interface IStatus {
  windowWeb3: Web3 | undefined;
  contract: any;
}

const Status = ({windowWeb3, contract}: IStatus) => {
  const [currentRate, setCurrentRate]: [number, Dispatch<SetStateAction<number>>] = useState(0);
  const [currentSupply, setCurrentSupply]: [number, Dispatch<SetStateAction<number>>] = useState(0);

  useEffect(() => {
    (async () => {
      if (windowWeb3) {
        contract?.methods.currentsupply().call().then(setCurrentSupply);
        contract?.methods.exchangeAmount(1).call().then(setCurrentRate);
      }
    })();
  }, [contract?.methods, windowWeb3]);

  return (
    <div className={styles.Status}>
      <div className={styles.Status__greeting}>
        <h1 className={styles.Status__title}>
          Welcome to <strong>THE VAULT.</strong>
        </h1>
        <h2 className={styles.Status__subtitle}>
          Please familiarize yourself with the Vault Swap contract prior to interacting with the vault.
        </h2>
      </div>
      <div className={styles.Status__widgets}>
        <Total
          currentSupply={currentSupply}
        />
        <Vault/>
        <Rate
          currentRate={currentRate}
        />
      </div>
    </div>
  );
};

export default Status;
