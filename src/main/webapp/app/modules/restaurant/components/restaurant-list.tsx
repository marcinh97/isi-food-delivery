import React from 'react';
import { RESTAURANTS } from "app/shared/data/restaurants";


export const RestaurantList = () => {
  return (
    RESTAURANTS.map((restaurant) => (
      <p key={Math.floor(Math.random()*10000)}>KAKA { restaurant.name}</p>
    ))
  )
};
