import { IRestaurant } from 'app/shared/model/restaurant.model';

export const RESTAURANTS: Array<IRestaurant> = [
  {
    id: 1,
    name: 'Thali',
    location: {
      longitude: 11,
      latitude: 22
    },
    type: {
      name: 'Indian'
    }
  },
  {
    id: 2,
    name: 'McDonalds',
    location: {
      longitude: 11,
      latitude: 22
    },
    type: {
      name: 'American'
    }
  }
];
