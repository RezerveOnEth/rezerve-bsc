import styles from './Swap.module.css';
import arrow_icon_alt from '../../assets/images/arrow-icon-alt.svg';
import {useEffect, useState} from 'react';
import Web3 from 'web3';

interface ISwap {
  windowWeb3: Web3 | undefined;
  ReserveExchangeContract: any;
  account: string;
}

const Swap = ({windowWeb3, ReserveExchangeContract, account}: ISwap) => {
  const [currentRate, setCurrentRate] = useState(0);
  const [exchangeValue, setExchangeValue] = useState('');
  const [exchangeResult, setExchangeResult] = useState('');
  const [isActiveExchange, setIsActiveExchange] = useState(false);

  useEffect(() => {
    (async () => {
      const _currentRate = await ReserveExchangeContract?.methods.floorPrice().call();
      setCurrentRate(_currentRate / 1e18);
      setIsActiveExchange(true);
    })();
  }, [ReserveExchangeContract?.methods]);


  const buyTokens = (etherAmount: string) => {
    ReserveExchangeContract?.methods
      .exchangeReserve(etherAmount)
      .send({
        value: etherAmount,
        from: account
      });
  };

  const handleOnClick = () => {
    (async () => {
      if (account && windowWeb3) {
        buyTokens((Number(exchangeValue) * 1e9).toString());
      }
    })();
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
            value={exchangeValue}
            onChange={(event) => {
              setExchangeValue(event.target.value);
              setExchangeResult((Number(event.target.value) * currentRate).toString());
            }}
            disabled={!isActiveExchange}
          />
          <img src={arrow_icon_alt} alt=""/>
          <input
            type="number"
            min={0}
            className={styles.Swap__input}
            value={Number(exchangeResult).toFixed(9)}
            onChange={(event) => {
              setExchangeResult(event.target.value);
              setExchangeValue((Number(event.target.value) / currentRate).toString());
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

        <span
          className={styles.Swap__rate}>*1 RZRV = {currentRate.toFixed(9)} DAI</span>
      </div>
    </div>
  );
};

export default Swap;
