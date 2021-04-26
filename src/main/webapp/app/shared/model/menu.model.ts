export interface IMenuItem {
  name?: string;
  img?: string;
  description?: string;
  price?: number;
}

export interface IMenu {
  restaurantId?: number;
  items?: Array<IMenuItem>;
}
