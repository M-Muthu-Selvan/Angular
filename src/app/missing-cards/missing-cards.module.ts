import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissingCardsComponent } from './missing-cards.component';
import { CartModule } from '../cart/cart.module';
import { MissingCardsRoutingModule } from './missing-cards-routing.module';

@NgModule({
  declarations: [MissingCardsComponent],
  imports: [
    CommonModule,
    CartModule,
    MissingCardsRoutingModule
  ],
  exports: [MissingCardsComponent, CartModule]
})
export class MissingCardsModule { }
