import styles from './Layout.module.css';

import {Route, Switch} from 'react-router-dom';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import Contract from 'web3';

import Status from '../../views/Status/Status';
import Swap from '../../views/Swap/Swap';
import Header from '../Header/Header';
import {Dispatch, SetStateAction, useEffect, useState} from 'react';

interface ILayout {
  windowWeb3: Web3 | undefined;
  RZRV: any;
  web3Modal: Web3Modal;
  setWindowWeb3: Dispatch<SetStateAction<Web3 | undefined>>;
}

const Layout = ({windowWeb3, RZRV, web3Modal, setWindowWeb3}: ILayout) => {
  const [contract, setContract]: [Contract | undefined, Dispatch<SetStateAction<Contract | undefined>>] = useState();
  const [account, setAccount]: [string, Dispatch<SetStateAction<string>>] = useState('');

  useEffect(() => {
    (async () => {
      if (windowWeb3) {
        const RZRVAbi: any = RZRV.abi;
        const _contract: any = await new windowWeb3.eth.Contract(RZRVAbi, RZRV.address);

        setContract(_contract);
        // console.log(await contract.methods.currentsupply().call());
        // console.log(await contract.methods.daiBalance().call());
      }
    })();
  }, [RZRV.abi, RZRV.address, windowWeb3]);

  return (
    <div className={styles.Layout}>
      <Header
        web3Modal={web3Modal}
        setWindowWeb3={setWindowWeb3}
        setAccount={setAccount}
      />
      <Switch>
        <Route exact path="/">
          <Status
            windowWeb3={windowWeb3}
            contract={contract}
          />
        </Route>
        <Route exact path="/swap">
          <Swap
            windowWeb3={windowWeb3}
            contract={contract}
            account={account}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default Layout;
