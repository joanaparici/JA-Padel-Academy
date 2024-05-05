import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Product } from '../../models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  @Input() selectedProduct: Product | null = null;
  @Input() isSelectedProductOnCart: boolean | undefined;
  @Output() deleteProduct = new EventEmitter<number>();
  @Output() changeFavorite = new EventEmitter<void>();
  @Output() addProductToCart = new EventEmitter<Product>();

  constructor() {}

  onDeleteProduct(id: number): void {
    this.deleteProduct.emit(id);
  }

  onChangeFavorite(): void {
    this.changeFavorite.emit();
  }

  onAddProductToCart(): void {
    if (this.selectedProduct != null) {
      this.addProductToCart.emit(this.selectedProduct);
    }
  }
}
