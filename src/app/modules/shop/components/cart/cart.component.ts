import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { Subscription } from 'rxjs';
import { CartList } from '../../models/CartList';
import { StripeService } from 'src/app/services/stripe/stripe.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  public cartProducts: CartList;
  public totalItems: number = 0;
  public totalPrice: number = 0;
  public currency: string = 'EUR';
  cardServiceSubscription: Subscription | null = null;

  constructor(
    private readonly cartService: CartService,
    private stripeService: StripeService
  ) {
    this.cartProducts = new CartList([]);
  }

  ngOnInit(): void {
    this.cardServiceSubscription = this.cartService.cartProducts$.subscribe(
      (products) => {
        this.cartProducts = products;
        this.updateCartSummary();
      }
    );
  }

  ngOnDestroy(): void {
    this.cardServiceSubscription?.unsubscribe();
  }

  updateCartSummary() {
    this.totalItems = this.cartProducts.all.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    this.totalPrice = this.cartProducts.all.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
  }

  deleteProduct(productId: number) {
    this.cartService.deleteCartProducts(productId);
    this.updateCartSummary();
  }

  checkout() {
    this.stripeService.createCheckoutSession(this.cartProducts.all).subscribe({
      next: (session) => {
        if (session.url) {
          window.location.href = session.url;
        } else {
          console.error('No se recibió una URL válida de la sesión de Stripe');
        }
      },
      error: (err) => {
        console.error('Error al crear la sesión de checkout:', err);
      },
    });
  }
}
