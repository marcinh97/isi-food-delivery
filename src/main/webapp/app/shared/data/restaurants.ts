import { IRestaurant } from 'app/shared/model/restaurant.model';

export const RESTAURANTS: Array<IRestaurant> = [
  {
    id: 1,
    name: 'Mango Mama',
    location: {
      latitude: 51.1,
      longitude: 17.03
    },
    type: {
      name: 'Indian'
    }
  },
  {
    id: 2,
    name: 'Goku Sushi',
    location: {
      latitude: 51.03,
      longitude: 16.78
    },
    type: {
      name: 'Japanese'
    }
  }
];
