import { Product } from './Product';

export class ProductList {
  public all: Product[];

  constructor(products: Product[]) {
    this.all = products.map((product) => ({ ...product }));
  }

  getCheaperProducts() {
    return new ProductList(this.all.filter((product) => product.price < 2000));
  }

  getExpensiveProducts() {
    return new ProductList(this.all.filter((product) => product.price > 2000));
  }

  getPopularProducts() {
    return new ProductList(this.all.filter((product) => product.rating >= 4.5));
  }

  resetProducts(all: Product[]): ProductList {
    console.log(all);
    return new ProductList(all);
  }
}
