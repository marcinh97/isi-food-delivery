import React from 'react';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Settings from './settings/settings';
import Password from './password/password';
import {RestaurantList} from "app/modules/restaurant/components/restaurant-list";
import {RestaurantMenu} from "app/modules/restaurant/components/restaurant-menu";

const Routes = ({ match }) => (
  <div>
    <ErrorBoundaryRoute path={`${match.url}/settings`} component={Settings} />
    <ErrorBoundaryRoute path={`${match.url}/password`} component={Password} />
    <ErrorBoundaryRoute path={`${match.url}/restaurants`} component={RestaurantList} />
    <ErrorBoundaryRoute path={`${match.url}/menu/:id?`} component={RestaurantMenu} />
  </div>
);

export default Routes;
