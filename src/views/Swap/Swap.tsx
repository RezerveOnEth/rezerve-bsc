import styles from './Swap.module.css';
import arrow_icon_alt from '../../assets/images/arrow-icon-alt.svg';
import {useEffect, useState} from 'react';
import Web3 from 'web3';

interface ISwap {
  windowWeb3: Web3 | undefined;
  ReserveExchangeContract: any;
  ReserveContract: any;
  account: string;
}

const Swap = ({windowWeb3, ReserveExchangeContract, ReserveContract, account}: ISwap) => {
  const [currentRate, setCurrentRate] = useState(0);
  const [exchangeValue, setExchangeValue] = useState('');
  const [exchangeResult, setExchangeResult] = useState('');
  const [isActiveExchange, setIsActiveExchange] = useState(false);

  useEffect(() => {
    (async () => {
      if (windowWeb3) {
        ReserveExchangeContract?.methods.exchangeAmount(1).call().then((result: number) => {
          setCurrentRate(result);
          setIsActiveExchange(true);
          // setAddress(contract.eth.)
        });
      }
    })();
  }, [ReserveExchangeContract?.methods, windowWeb3]);

  const handleOnClick = () => {
    (async () => {
      if (account) {
        const _receiver = await ReserveExchangeContract?.methods.ReserveAddress().call();

        windowWeb3?.eth
          .sendTransaction({
            from: account,
            to: _receiver,
            value: windowWeb3?.utils.toWei('0.5', 'ether')
          })
          .then(() => {
            ReserveContract?.methods.transfer(_receiver, exchangeValue, {from: account}).call();
          });
        // ReserveContract?.methods
        //   .transferFrom(account, await ReserveExchangeContract?.methods.ReserveAddress().call(), 1)
        //   .send({
        //     from: account
        //   })


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
            value={exchangeResult}
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

        <span className={styles.Swap__rate}>*1 RZRV = {currentRate} DAI</span>
      </div>
    </div>
  );
};

export default Swap;
