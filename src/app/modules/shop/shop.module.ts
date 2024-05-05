import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

// Components
import { ShopPageComponent } from './components/shop-page/shop-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { SimilarProductsComponent } from './components/similar-products/similar-products.component';
import { StarsRatingComponent } from './components/stars-rating/stars-rating.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    ShopPageComponent,
    SidebarComponent,
    ProductDetailsComponent,
    SimilarProductsComponent,
    StarsRatingComponent,
    ReviewsComponent,
    CartComponent,
    NewProductComponent,
  ],
  imports: [
    CommonModule, // Importar CommonModule en lugar de BrowserModule
    ShopRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
  ],
})
export class ShopModule {}
