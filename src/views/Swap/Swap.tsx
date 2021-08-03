import styles from './Swap.module.css';
import arrow_icon_alt from '../../assets/images/arrow-icon-alt.svg';

const Swap = () => {
  return (
    <div className={styles.Swap}>
      <div className={styles.Swap__form}>
        {/*<button className={styles.Swap__close}>x</button>*/}
        <div className={styles.Swap__container}>
          <h2 className={styles.Swap__title}>Vault Swap</h2>

          <input type="number" min={0} className={styles.Swap__input}/>
          <img src={arrow_icon_alt} alt=""/>
          <input type="number" min={0} className={styles.Swap__input}/>

          <button className={styles.Swap__button}>Submit</button>
        </div>

        <span className={styles.Swap__rate}>*1 RZRV =  - DAI</span>
      </div>
    </div>
  );
};

export default Swap;
