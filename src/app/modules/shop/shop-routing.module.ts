import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopPageComponent } from './components/shop-page/shop-page.component';
import { CartComponent } from './components/cart/cart.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  { path: '', component: ShopPageComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'newproduct',
    component: NewProductComponent,
    canActivate: [AuthGuard ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
