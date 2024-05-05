import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';
import { IProductContract } from '../../modules/shop/interfaces/IProductContract';
import { ProductList } from '../../modules/shop/models/ProductList';
import { Product } from '../../modules/shop/models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  private readonly products = new BehaviorSubject<ProductList>(
    new ProductList([])
  );
  public products$ = this.products.asObservable();

  constructor(private readonly http: HttpClient) {}

  getProducts(): void {
    this.http
      .get<IProductContract[]>('assets/data/products.json')
      .pipe(map((response: IProductContract[]) => new ProductList(response)))
      .subscribe((productList: ProductList) => {
        this.products.next(productList);
      });
  }

  addProduct(newProduct: Product) {
    const currentProducts = this.products.value.all;
    const updatedProducts = [...currentProducts, newProduct];
    this.products.next(new ProductList(updatedProducts));
    console.log(this.products);
  }

  deleteProduct(id: number) {
    const currentProducts = this.products.value.all;
    const updatedProducts = currentProducts.filter(
      (product) => product.id !== id
    );
    this.products.next(new ProductList(updatedProducts));
  }
}
