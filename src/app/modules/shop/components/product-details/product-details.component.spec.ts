import { type ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsComponent } from './product-details.component';
import { Product } from '../../models/Product';

fdescribe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailsComponent],
    });
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //? Tests para los input
  it('should handle input for selectedProduct correctly', () => {
    const selectedProductMock: Product = {
      id: 0,
      product: '',
      price: 0,
      currency: '',
      rating: 0,
      favorite: false,
      description: '',
    };

    component.selectedProduct = selectedProductMock;
    expect(component.selectedProduct).toBe(selectedProductMock);
  });
  it('should handle input for isSelectedProductOnCart correctly', () => {
    const selectedProductMock: Product = {
      id: 0,
      product: '',
      price: 0,
      currency: '',
      rating: 0,
      favorite: false,
      description: '',
    };

    component.selectedProduct = selectedProductMock;
    expect(component.selectedProduct).toBe(selectedProductMock);
  });

  it('should emit the product id when deleteProduct is called', () => {
    const spy = spyOn(component.deleteProduct, 'emit');
    const productId = 3;
    component.onDeleteProduct(productId);
    expect(spy).toHaveBeenCalledWith(productId);
  });

  it('should emit when changeFavorite is called', () => {
    const spy = spyOn(component.changeFavorite, 'emit');
    component.onChangeFavorite();
    expect(spy).toHaveBeenCalled();
  });

  it('should emit the selected product when addProductToCart is called', () => {
    const spy = spyOn(component.addProductToCart, 'emit');
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
    component.onAddProductToCart();
    expect(spy).toHaveBeenCalledWith(productMock);
  });
});
