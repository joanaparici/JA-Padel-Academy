import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsComponent } from './reviews.component';
import { Product } from '../../models/Product';

fdescribe('ReviewsComponent', () => {
  let component: ReviewsComponent;
  let fixture: ComponentFixture<ReviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewsComponent],
    });
    fixture = TestBed.createComponent(ReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should assign selectedProduct correctly', () => {
    const productMock: Product = {
      id: 1,
      product: 'Test Product',
      description: 'lorem ipsum ad asd adsd',
      price: 5,
      currency: '$',
      rating: 4,
      favorite: false,
    };
    component.selectedProduct = productMock;
    expect(component.selectedProduct).toBe(productMock);
  });
});
