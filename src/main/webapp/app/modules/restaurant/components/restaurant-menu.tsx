import React from "react";
import {getUrlParameter} from "react-jhipster";
import {RouteComponentProps} from "react-router";
import { Table, Input, Row, Col, Badge } from 'reactstrap';

import {MENUS} from "app/shared/data/menus";
import {RESTAURANTS} from "app/shared/data/restaurants";


import Mains from "./menuComponents/Mains";
import Extras from "./menuComponents/Extras";
import Total from "./menuComponents/Total";
import { Provider } from "./MenuContext";
import { mains, sides, drinks } from "./menuComponents/data";

import "./menuComponents/menu.css";
export interface IActivateProps extends RouteComponentProps<{ id: any }> {}

export const RestaurantMenu = (props: IActivateProps) => {
  const id = getUrlParameter('id', props.location.search);
  console.log(props.location.search)
  const restaurant = RESTAURANTS.filter(r => r.id.toString() == id)[0];
  const menuItems = MENUS.filter(m => m.restaurantId.toString() == id)[0].items; //.map((menu) => menu.items)
  console.log(menuItems)
  return (
    /*<div>
      <h1>MENU: {restaurant.name} </h1>
      {
        menuItems.map((item) =>
          <p>
            <h5>{item.name}</h5>
            <a> {item.description} {item.price} PLN</a>
          </p>
        )
      }
    </div>*/
    <Provider>
      <h1 style={{textAlign: 'center'}}>MENU: {restaurant.name} </h1>
      <div className="menu">
        <Mains meals={mains} />
        <aside className="aside">
          <Extras type="Sides" items={sides} />
          <Extras type="Drinks" items={drinks} />
        </aside>
        <Total />
      </div>
    </Provider>
  )
};
