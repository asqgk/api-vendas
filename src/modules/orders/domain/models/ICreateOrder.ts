import { ICustomer } from '@modules/customers/domain/models/ICustomer';
import { ICreateOrderProduct } from './ICreateOrderProducts';

export interface ICreateOrder {
  customer: ICustomer;
  products: ICreateOrderProduct[];
}
