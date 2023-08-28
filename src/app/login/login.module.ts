import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { NavModule } from '../nav/nav.module';
import { CategoryModule } from '../category/category.module';
import { SliderModule } from '../slider/slider.module';
import { ProductModule } from '../product/product.module';
import { LoginRoutingModule } from './login-routing.module';
import { HomeModule } from '../home/home.module';
import { CartModule } from '../cart/cart.module';
import { MissingCardsModule } from '../missing-cards/missing-cards.module';
import { EmptyBasketModule } from '../empty-basket/empty-basket.module';
import { GroceryModule } from '../grocery/grocery.module';
import { PageNotFoundModule } from '../page-not-found/page-not-found.module';
import { ServiceService } from '../services/service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { practiceServices } from '../query';
import { SampleModule } from '../sample/sample.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SampleModule,
    
    CommonModule,
    FormsModule,
    NavModule,
    CategoryModule,
    SliderModule,
    ProductModule,
    LoginRoutingModule,
    HomeModule,
    CartModule,
    GroceryModule,
    MissingCardsModule,
    EmptyBasketModule,
    PageNotFoundModule,
    HttpClientModule
  ],
  providers:[ServiceService, HttpClient,practiceServices],
  exports:[LoginComponent]
})
export class LoginModule { }
