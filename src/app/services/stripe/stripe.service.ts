import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from 'src/app/modules/shop/models/Cart';

@Injectable({
  providedIn: 'root',
})
export class StripeService {
  constructor(private http: HttpClient) {}

  createCheckoutSession(cartItems: Cart[]) {
    const items = cartItems.map(item => ({
      name: item.product.product,
      price: item.product.price,
      quantity: item.quantity
    }));

    return this.http.post<{
      url: string; id: string 
}>('/create-checkout-session', { items });
  }
}
