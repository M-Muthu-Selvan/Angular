import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavModule } from '../nav/nav.module';
import { ProductModule } from '../product/product.module';
import { CategoryModule } from '../category/category.module';
import { SliderModule } from '../slider/slider.module';
import { HomeRoutingModule } from './home-routing.module';
import { ServiceService } from '../services/service.service';;



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NavModule,
    ProductModule,
    CategoryModule,
    SliderModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent,
  ],
   providers: [ServiceService]
})
export class HomeModule { }
