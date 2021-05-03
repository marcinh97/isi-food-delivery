import { Moment } from 'moment';

export interface IOrder {
  id?: number;
  datetime?: Moment;
  acceptanceDatetime?: Moment;
  status?: string;
  completed?: boolean;
}

export const defaultValue: Readonly<IOrder> = {
  completed: false
};
