import styles from './App.module.css';
import ReserveExchange from './contracts/ReserveExchange.json';
import Reserve from './contracts/Reserve.json';

import {BrowserRouter} from 'react-router-dom';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';

import Navbar from './components/Navbar/Navbar';
import Layout from './components/Layout/Layout';
import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import WalletConnectQRCodeModal from '@walletconnect/qrcode-modal';

const App = () => {
  const [windowWeb3, setWindowWeb3]: [Web3 | undefined, Dispatch<SetStateAction<Web3 | undefined>>] = useState();

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: {
          56: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
        },
        network: 'binance',
        infuraId: '57713afc30094d0e8470f83df3cf3e2a',
      }
    },
    qrcodeModalOptions: {
      mobileLinks: [
        'rainbow',
        'metamask',
        'argent',
        'trust',
        'imtoken',
        'pillar',
      ],
      package: WalletConnectQRCodeModal
    },
  };

  const web3Modal = new Web3Modal({
    network: 'testnet',
    cacheProvider: true, // optional
    providerOptions // required
  });

  useEffect(() => {
    (async () => {
      const web3 = new Web3(Web3.givenProvider || 'https://data-seed-prebsc-1-s1.binance.org:8545');

      setWindowWeb3(web3);
    })();
  }, []);

  return (
    <div className={styles.App}>
      <BrowserRouter>
        <div className={styles.App__grid}>
          <Navbar/>
          <Layout
            windowWeb3={windowWeb3}
            ReserveExchange={ReserveExchange}
            Reserve={Reserve}
            web3Modal={web3Modal}
            setWindowWeb3={setWindowWeb3}
          />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
