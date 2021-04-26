import React from "react";
import {getUrlParameter} from "react-jhipster";
import {RouteComponentProps} from "react-router";

export interface IActivateProps extends RouteComponentProps<{ id: any }> {}

export const RestaurantMenu = (props: IActivateProps) => {
  const id = getUrlParameter('id', props.location.search);
  console.log("AAAA")
  console.log(props.location.search)
  return (
    <div>
      <h1>MENU: {id} </h1>
    </div>
  )
};
