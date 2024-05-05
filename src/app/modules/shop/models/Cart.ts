import { ICart } from '../interfaces/ICart';
import { ICartContract } from '../interfaces/ICartContract';
import { IProductContract } from '../interfaces/IProductContract';

export class Cart implements ICart {
  product: IProductContract;
  quantity: number;
  constructor(cart: ICartContract) {
    this.product = cart.product;
    this.quantity = cart.quantity;
  }
}
