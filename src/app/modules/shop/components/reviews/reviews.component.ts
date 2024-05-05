import { Component, Input } from '@angular/core';
import { type Product } from '../../models/Product';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent {
  @Input() selectedProduct!: Product | null;
}
