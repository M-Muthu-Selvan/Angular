import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { cartRoutingModule } from './cart-routing.module';
import { NavModule } from '../nav/nav.module';


@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    cartRoutingModule,
    NavModule,
  ],
  exports: [CartComponent, NavModule]
})
export class CartModule { }
