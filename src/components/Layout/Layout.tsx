import styles from './Layout.module.css';

import {Route, Switch} from 'react-router-dom';
import Web3 from 'web3';
import Web3Modal from 'web3modal';

import Status from '../../views/Status/Status';
import Swap from '../../views/Swap/Swap';
import Header from '../Header/Header';
import {Dispatch, SetStateAction} from 'react';

interface ILayout {
  windowWeb3: Web3 | undefined;
  RZRV: any;
  web3Modal: Web3Modal;
  setWindowWeb3: Dispatch<SetStateAction<Web3 | undefined>>;
}

const Layout = ({windowWeb3, RZRV, web3Modal, setWindowWeb3}: ILayout) => {
  return (
    <div className={styles.Layout}>
      <Header
        web3Modal={web3Modal}
        setWindowWeb3={setWindowWeb3}
      />
      <Switch>
        <Route exact path="/">
          <Status
            windowWeb3={windowWeb3}
            RZRV={RZRV}
          />
        </Route>
        <Route exact path="/swap">
          <Swap/>
        </Route>
      </Switch>
    </div>
  );
};

export default Layout;
