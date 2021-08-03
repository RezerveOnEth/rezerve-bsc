import styles from './Layout.module.css';

import {Route, Switch} from 'react-router-dom';

import Status from '../../views/Status/Status';
import Swap from '../../views/Swap/Swap';
import Header from '../Header/Header';

const Layout = () => {
  return (
    <div className={styles.Layout}>
      <Header/>
      <Switch>
        <Route exact path="/"><Status/></Route>
        <Route exact path="/swap"><Swap/></Route>
      </Switch>
    </div>
  );
};

export default Layout;
