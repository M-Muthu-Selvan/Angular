import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyBasketComponent } from './empty-basket.component';
import { CartModule } from '../cart/cart.module';
import { EmptyBasketRoutingModule } from './empty-basket--routing.module';

@NgModule({
  declarations: [EmptyBasketComponent],
  imports: [
    CommonModule,
    CartModule,
    EmptyBasketRoutingModule
  ],
  exports:[CartModule,EmptyBasketComponent]
})
export class EmptyBasketModule { }
