import {Route, Switch} from 'react-router-dom';

import Status from '../../views/Status/Status';
import Swap from '../../views/Swap/Swap';

const Layout = () => {
  return (
    <Switch>
      <Route exact path="/"><Status/></Route>
      <Route exact path="/swap"><Swap/></Route>
    </Switch>
  );
};

export default Layout;
