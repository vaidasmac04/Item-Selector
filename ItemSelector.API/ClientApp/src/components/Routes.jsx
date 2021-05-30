import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ItemsPage from '../pages/ItemsPage';

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/" component={ItemsPage} />
    </Switch>
  </div>
);

export default Routes;