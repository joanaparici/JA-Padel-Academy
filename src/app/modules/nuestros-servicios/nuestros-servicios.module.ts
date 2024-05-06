import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuestrosServiciosRoutingModule } from './nuestros-servicios-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [MainPageComponent],
  imports: [CommonModule, NuestrosServiciosRoutingModule, MatCardModule],
})
export class NuestrosServiciosModule {}
