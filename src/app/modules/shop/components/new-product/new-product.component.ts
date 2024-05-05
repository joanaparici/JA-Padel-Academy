import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Product } from '../../models/Product';
import { ProductList } from '../../models/ProductList';
import { ProductDataService } from 'src/app/services/productData/product-data.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent {
  productForm: FormGroup = this.formBuilder.group({
    id: new FormControl(this.generateUniqueId()),
    product: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    price: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(999),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(350),
      this.forbiddenCharactersValidator(/[^a-zA-Z0-9 ]/),
    ]),
    favorite: new FormControl(false),
    currency: new FormControl('€'),
    rating: new FormControl(5),
    similarProducts: new FormControl([]),
  });

  formValue: any;
  isSubmited: boolean = false;
  products: ProductList;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductDataService
  ) {
    this.products = new ProductList([]);
  }

  ngOnInit() {
    this.productService.products$.subscribe((products) => {
      this.products = products;
    });
  }

  validateField(field: string): boolean {
    return true;
  }

  addNewProduct() {
    this.productService.addProduct(this.productForm.value);
    this.isSubmited = true;
  }

  generateUniqueId(): number {
    return Date.now();
  }

  forbiddenCharactersValidator(regex: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }
      const forbidden = regex.test(control.value);
      return forbidden
        ? { forbiddenCharacters: { value: control.value } }
        : null;
    };
  }

  addSimilarProduct(product: Product) {
    const similarProducts = this.productForm.get('similarProducts')?.value;
    this.productForm
      .get('similarProducts')
      ?.setValue([...similarProducts, product]);
  }
}
