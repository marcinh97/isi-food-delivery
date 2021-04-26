import { IMenu } from 'app/shared/model/menu.model';

export const MENUS: Array<IMenu> = [
  {
    restaurantId: 1,
    items: [
      {
        name: 'Butter Masala',
        img: 'http://www.img.com',
        description: 'Delicious Indian butter masala',
        price: 28.59
      },
      {
        name: 'Garam Masala',
        img: 'http://www.img.com',
        description: 'Delicious Indian garam masala',
        price: 31.09
      }
    ]
  },
  {
    restaurantId: 2,
    items: [
      {
        name: 'Nigiri with salmon',
        img: 'http://www.img.com',
        description: 'Plain cheeseburger',
        price: 28.59
      },
      {
        name: 'Futomaki with tuna',
        img: 'http://www.img.com',
        description: 'Amazing McFlurry',
        price: 7.29
      }
    ]
  }
];
