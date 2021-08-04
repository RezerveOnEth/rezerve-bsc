import styles from './Swap.module.css';
import arrow_icon_alt from '../../assets/images/arrow-icon-alt.svg';
import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import Web3 from 'web3';

interface ISwap {
  windowWeb3: Web3 | undefined;
  contract: any;
  account: string;
}

const Swap = ({windowWeb3, contract, account}: ISwap) => {
  const [currentRate, setCurrentRate]: [number, Dispatch<SetStateAction<number>>] = useState(0);
  const [exchangeValue, setExchangeValue]: [number, Dispatch<SetStateAction<number>>] = useState(0);
  const [exchangeResult, setExchangeResult]: [number, Dispatch<SetStateAction<number>>] = useState(0);
  const [isActiveExchange, setIsActiveExchange] = useState(false);

  useEffect(() => {
    (async () => {
      if (windowWeb3) {
        contract?.methods.exchangeAmount(1).call().then((result: number) => {
          setCurrentRate(result);
          setIsActiveExchange(true);
          // setAddress(contract.eth.)
        });
      }
    })();
  }, [contract?.methods, windowWeb3]);

  const handleOnClick = () => {
    if (account) {
      contract?.methods.exchangeAmount(1).send({
        from: account,
        // value: windowWeb3?.utils.toWei('0.0015', 'ether')
      });

      console.log(contract?.methods.daiBalance().call());
    }
  };

  return (
    <div className={styles.Swap}>
      <div className={styles.Swap__form}>
        {/*<button className={styles.Swap__close}>x</button>*/}
        <div className={styles.Swap__container}>
          <h2 className={styles.Swap__title}>Vault Swap</h2>

          <input
            type="number"
            min={0}
            className={styles.Swap__input}
            value={exchangeValue?.toString()}
            onChange={(event) => {
              setExchangeValue(Number(event.target.value));
              setExchangeResult(Number(event.target.value) * currentRate);
            }}
            disabled={!isActiveExchange}
          />
          <img src={arrow_icon_alt} alt=""/>
          <input
            type="number"
            min={0}
            className={styles.Swap__input}
            value={exchangeResult?.toString()}
            onChange={(event) => {
              setExchangeResult(Number(event.target.value));
              setExchangeValue(Number(event.target.value) / currentRate);
            }}
            disabled={true}
          />

          <button
            className={styles.Swap__button}
            disabled={!isActiveExchange}
            onClick={handleOnClick}
          >
            Submit
          </button>
        </div>

        <span className={styles.Swap__rate}>*1 RZRV =  {currentRate} DAI</span>
      </div>
    </div>
  );
};

export default Swap;
