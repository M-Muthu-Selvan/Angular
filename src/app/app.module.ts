import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {practiceServices} from './query';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClient, HttpClientModule} from '@angular/common/http';


import { HomeModule } from './home/home.module';
import {LoginModule} from './login/login.module';
import { CartModule } from './cart/cart.module';
import { GroceryModule } from './grocery/grocery.module';
import { MissingCardsModule } from './missing-cards/missing-cards.module';
import { EmptyBasketModule } from './empty-basket/empty-basket.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';

import { SampleModule } from './sample/sample.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
    CartModule,
    GroceryModule,
    EmptyBasketModule,
    MissingCardsModule,
    PageNotFoundModule,
    
    SampleModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
