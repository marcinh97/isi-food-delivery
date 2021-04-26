import React from "react";
import {getUrlParameter} from "react-jhipster";
import {RouteComponentProps} from "react-router";
import { Table, Input, Row, Col, Badge } from 'reactstrap';

import {MENUS} from "app/shared/data/menus";
import {RESTAURANTS} from "app/shared/data/restaurants";

export interface IActivateProps extends RouteComponentProps<{ id: any }> {}

export const RestaurantMenu = (props: IActivateProps) => {
  const id = getUrlParameter('id', props.location.search);
  console.log(props.location.search)
  const restaurant = RESTAURANTS.filter(r => r.id.toString() == id)[0];
  const menuItems = MENUS.filter(m => m.restaurantId.toString() == id)[0].items; //.map((menu) => menu.items)
  console.log(menuItems)
  return (
    <div>
      <h1>MENU: {restaurant.name} </h1>
      {
        menuItems.map((item) =>
          <p>
            <h5>{item.name}</h5>
            <a> {item.description} {item.price} PLN</a>
          </p>
        )
      }
    </div>
  )
};
