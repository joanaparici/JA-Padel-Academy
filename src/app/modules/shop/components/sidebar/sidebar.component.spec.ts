import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import { Product } from '../../models/Product';
import { FilterActionKeys } from '../../models/types';

fdescribe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarComponent],
    });
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //. Test para los input
  it('should handle input for products correctly', () => {
    const productsMock = [
      {
        id: 0,
        product: '',
        price: 0,
        currency: '',
        rating: 0,
        favorite: false,
        description: '',
      },
    ];
    component.products = productsMock;
    expect(component.products).toBe(productsMock);
  });

  it('should handle input for activeFilter correctly', () => {
    const activeFilterMock = 'filter';
    component.activeFilter = activeFilterMock;
    expect(component.activeFilter).toBe(activeFilterMock);
  });
  it('should handle input for selectedProduct correctly', () => {
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
    expect(component.selectedProduct).toBe(productMock);
  });

  //? Test para las funciones
  it('should emit the filter type when onFilter is called', () => {
    const spy = spyOn(component.filterSelected, 'emit');
    const type: FilterActionKeys = 'cheaper';

    component.onFilter(type);
    expect(spy).toHaveBeenCalledWith(type);
  });
  it('should emit the product id when onWatchProduct is called', () => {
    const spy = spyOn(component.watchedProduct, 'emit');
    const productId = 9;

    component.onWatchProduct(productId);
    expect(spy).toHaveBeenCalledWith(productId);
  });
});
