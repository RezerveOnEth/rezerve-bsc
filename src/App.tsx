import styles from './App.module.css';

import {BrowserRouter} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Layout from './components/Layout/Layout';

const App = () => {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <div className={styles.App__grid}>
          <Navbar/>
          <Layout/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
