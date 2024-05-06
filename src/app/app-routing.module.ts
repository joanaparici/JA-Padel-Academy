import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'tienda',
    loadChildren: () =>
      import('./modules/shop/shop.module').then((m) => m.ShopModule),
  },
  {
    path: 'servicios',
    loadChildren: () =>
      import('./modules/nuestros-servicios/nuestros-servicios.module').then(
        (m) => m.NuestrosServiciosModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
