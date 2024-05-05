import { ICartContract } from '../interfaces/ICartContract';
import { Cart } from './Cart';

export class CartList {
  all: Cart[];
  constructor(carts: ICartContract[]) {
    this.all = carts.map((cart) => new Cart(cart));
  }
}
