import { IGeoLocation } from 'app/shared/model/geolocation.model';

export interface IRestaurantType {
  name?: string;
}

export interface IRestaurant {
  id?: any;
  name?: string;
  location?: IGeoLocation;
  type?: IRestaurantType;
}
