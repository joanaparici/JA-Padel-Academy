import { IProductContract } from './IProductContract';

export interface ICart {
  product: IProductContract;
  quantity: number;
}
