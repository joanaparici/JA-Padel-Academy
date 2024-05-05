import { IProductContract } from './IProductContract';

export interface ICartContract {
  product: IProductContract;
  quantity: number;
}
