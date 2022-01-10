import { ICustomer } from '@modules/customers/domain/models/ICustomer';
import { ICreateOrderProduct } from './ICreateOrderProducts';

export interface IOrder {
  id: string;
  customer: ICustomer;
  order_products: ICreateOrderProduct[];
  created_at: Date;
  updated_at: Date;
}
