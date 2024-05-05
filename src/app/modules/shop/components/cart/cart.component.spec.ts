import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { CartList } from '../../models/CartList';
import { of } from 'rxjs';

import { CartService } from 'src/app/services/cart/cart.service';

fdescribe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let mockCartService: any;

  beforeEach(async () => {
    mockCartService = {
      cartProducts$: of(new CartList([])),
      deleteCartProducts: jasmine.createSpy('deleteCartProducts'),
    };

    await TestBed.configureTestingModule({
      declarations: [CartComponent],
      providers: [{ provide: CartService, useValue: mockCartService }],
    }).compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe and update cart products on init', () => {
    const newCartList = new CartList([
      {
        product: {
          id: 0,
          product: '',
          price: 0,
          currency: '',
          rating: 0,
          favorite: false,
          description: '',
        },
        quantity: 0,
      },
    ]);
    mockCartService.cartProducts$ = of(newCartList);
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.cartProducts).toEqual(newCartList);
  });

  it('should delete product from cart', () => {
    const productId = 1;
    component.deleteProduct(productId);
    expect(mockCartService.deleteCartProducts).toHaveBeenCalledWith(productId);
  });
});
