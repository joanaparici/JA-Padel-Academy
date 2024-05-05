import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartList } from 'src/app/modules/shop/models/CartList';
import { Product } from 'src/app/modules/shop/models/Product';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartProducts = new BehaviorSubject<CartList>(new CartList([]));
  public cartProducts$ = this.cartProducts.asObservable();

  constructor() {
    this.loadCartProducts();
  }

  loadCartProducts(): void {
    const storedCart = sessionStorage.getItem('cart');
    if (storedCart != null) {
      const productList = new CartList(JSON.parse(storedCart));
      this.cartProducts.next(productList);
    }
  }

  addProductToCart(product: Product): void {
    const currentCart = this.cartProducts.value;
    const index = currentCart.all.findIndex(
      (item) => item.product.id === product.id
    );

    if (index !== -1) {
      currentCart.all[index].quantity += 1;
    } else {
      currentCart.all.push({ product, quantity: 1 });
    }
    this.cartProducts.next(new CartList(currentCart.all));
    this.saveCartProducts();
  }

  saveCartProducts(): void {
    sessionStorage.setItem('cart', JSON.stringify(this.cartProducts.value.all));
  }

  getCartQuantity(): number {
    return this.cartProducts.value.all.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }

  deleteCartProducts(productId: number): void {
    const updatedCart = this.cartProducts.value.all.filter(
      (item) => item.product.id !== productId
    );
    this.cartProducts.next(new CartList(updatedCart));
    this.saveCartProducts();
  }
}
