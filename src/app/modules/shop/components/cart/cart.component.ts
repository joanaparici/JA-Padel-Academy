import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { Subscription } from 'rxjs';
import { CartList } from '../../models/CartList';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  public cartProducts: CartList;
  cardServiceSubscription: Subscription | null = null;

  constructor(private readonly cartService: CartService) {
    this.cartProducts = new CartList([]);
  }

  ngOnInit(): void {
    this.cardServiceSubscription = this.cartService.cartProducts$.subscribe(
      (products) => {
        this.cartProducts = products;
      },
    );
  }

  ngOnDestroy(): void {
    this.cardServiceSubscription?.unsubscribe();
  }
  deleteProduct(productId: number) {
    this.cartService.deleteCartProducts(productId);
  }
}
