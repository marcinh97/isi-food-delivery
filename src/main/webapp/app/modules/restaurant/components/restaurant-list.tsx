import React from 'react';
import { RESTAURANTS } from "app/shared/data/restaurants";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import '../restaurant.scss'
import {renderToStaticMarkup} from "react-dom/server";
import { divIcon } from 'leaflet';
import { Button } from 'reactstrap';

import { Link } from "react-router-dom";

export const RestaurantList = () => {
  const iconMarkup = renderToStaticMarkup(<i className=" fa fa-map-marker-alt fa-3x" />);
  const customMarkerIcon = divIcon({
    html: iconMarkup,
  });
  const firstRestaurantLocation = RESTAURANTS[0].location;
  const defaultZoom = 10;

  return (
    <>
      <h1>Available restaurants</h1>
      {
        RESTAURANTS.map((restaurant) => (
          <p key={Math.floor(Math.random()*10000)}>
            { restaurant.name } : { restaurant.location.latitude } N { restaurant.location.longitude} E

          </p>
        ))
      }
      <div className="restaurant-map">
        <MapContainer center={[firstRestaurantLocation.latitude, firstRestaurantLocation.longitude]} zoom={defaultZoom} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            RESTAURANTS.map((restaurant) => (
              <Marker key={Math.floor(Math.random()*10000)}
                      position={[restaurant.location.latitude, restaurant.location.longitude]}
                      icon={customMarkerIcon}
                >
                <Popup>
                  <h5>{ restaurant.name }</h5>
                  <Link to={"/account/menu?id="+restaurant.id}>MENU</Link>
                </Popup>
              </Marker>
            ))
          }

        </MapContainer>
      </div>
    </>
  )
};
