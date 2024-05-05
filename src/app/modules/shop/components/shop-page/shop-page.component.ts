import { Component, OnInit } from '@angular/core';
import { ProductList } from '../../models/ProductList';
import { Product } from '../../models/Product';
import { Subscription } from 'rxjs';
import { FilterActionKeys } from '../../models/types';
import { ProductDataService } from 'src/app/services/productData/product-data.service';
import { CartList } from '../../models/CartList';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss'],
})
export class ShopPageComponent implements OnInit {
  products: ProductList;
  originalProducts: ProductList;
  cartProducts: CartList;
  selectedProduct: Product | null = null;
  isSelectedProductOnCart = false;
  activeFilter = '';

  private defaultProduct = 0;
  private cardServiceSubscription: Subscription | null = null;

  private filterActions: Record<FilterActionKeys, () => ProductList> = {
    cheaper: () => this.products.getCheaperProducts(),
    expensive: () => this.products.getExpensiveProducts(),
    popular: () => this.products.getPopularProducts(),
    reset: () => this.products.resetProducts(this.originalProducts.all),
  };

  constructor(
    private readonly productService: ProductDataService,
    private readonly cartService: CartService
  ) {
    this.products = new ProductList([]);
    this.originalProducts = new ProductList([]);
    this.cartProducts = new CartList([]);
  }

  ngOnInit(): void {
    this.productService.getProducts();
    this.productService.products$.subscribe((data) => {
      this.originalProducts = data;
      this.products = data;
      this.selectNewProduct(this.products.all[this.defaultProduct]);
    });

    this.cardServiceSubscription = this.cartService.cartProducts$.subscribe(
      (products) => {
        this.cartProducts = products;
      }
    );
  }

  //Metodos publicos
  addProductToCart(product: Product): void {
    this.cartService.addProductToCart(product);
    this.updateSelectedProductOnCart();
  }

  filterChanged(newFilter: FilterActionKeys): void {
    if (this.activeFilter === newFilter) {
      this.activeFilter = '';
      this.products = this.products.resetProducts(this.originalProducts.all);
      return;
    }
    this.activeFilter = newFilter;
    this.products = this.filterActions[newFilter]();
  }

  changeFavorite(): void {
    if (this.selectedProduct != null) {
      this.selectedProduct.favorite = !this.selectedProduct.favorite;
    }
  }

  watchProduct(id: number): void {
    const product = this.products.all.find(
      (product: Product) => product.id === id
    );
    if (product !== null && product !== undefined) {
      this.selectNewProduct(product);
    }
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id);
  }

  //Metodos privados
  private selectNewProduct(product: Product | null): void {
    this.selectedProduct = product;
    this.updateSelectedProductOnCart();
  }

  private updateSelectedProductOnCart() {
    this.isSelectedProductOnCart = this.cartProducts.all.some(
      (item) => item.product.id === this.selectedProduct?.id
    );
  }
}
