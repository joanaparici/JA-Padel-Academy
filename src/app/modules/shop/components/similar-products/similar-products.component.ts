import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Product } from '../../models/Product';

@Component({
  selector: 'app-similar-products',
  templateUrl: './similar-products.component.html',
  styleUrls: ['./similar-products.component.scss'],
})
export class SimilarProductsComponent {
  @Input() selectedProduct!: Product | null;
  @Output() watchedProduct = new EventEmitter<number>();

  onWatchProduct(id: number): void {
    this.watchedProduct.emit(id);
  }
}
