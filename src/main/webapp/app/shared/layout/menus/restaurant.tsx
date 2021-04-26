import {NavDropdown} from "app/shared/layout/menus/menu-components";
import React from "react";
import MenuItem from "app/shared/layout/menus/menu-item";

const restaurantMenuItems = (
  <>
    <MenuItem icon="sign-in-alt" to="/account/restaurants">
      Choose restaurant
    </MenuItem>
  </>
);

export const RestaurantMenu = ({ isAuthenticated = false }) => (
  <NavDropdown icon="" name="Restaurants" id="account-menu">
    {restaurantMenuItems}
  </NavDropdown>
);

export default RestaurantMenu;
