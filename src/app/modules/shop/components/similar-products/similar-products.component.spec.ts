import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarProductsComponent } from './similar-products.component';
import { Product } from '../../models/Product';

fdescribe('SimilarProductsComponent', () => {
  let component: SimilarProductsComponent;
  let fixture: ComponentFixture<SimilarProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimilarProductsComponent],
    });
    fixture = TestBed.createComponent(SimilarProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should handle input for selectedProduct correctly', () => {
    const productMock: Product = {
      id: 0,
      product: '',
      price: 0,
      currency: '',
      rating: 0,
      favorite: false,
      description: '',
    };
    component.selectedProduct = productMock;
    expect(component.selectedProduct).toBe(productMock);
  });

  it('should emit the product id when onWatchProduct is called', () => {
    const spy = spyOn(component.watchedProduct, 'emit');
    const productId = 9;

    component.onWatchProduct(productId);

    expect(spy).toHaveBeenCalledWith(productId);
  });
});
