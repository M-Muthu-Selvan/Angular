import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
 {path:'', 
  loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule)
  },
  {path:'home', 
  loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'home/cart',
    loadChildren:()=>import('./cart/cart.module').then(m=>m.CartModule)
  },
  {
    path: 'home/grocery',
    loadChildren:()=>import('./grocery/grocery.module').then(m=>m.GroceryModule)
  },
  {
    path: 'home/cart/grocery',
    loadChildren:()=>import('./missing-cards/missing-cards.module').then(m=>m.MissingCardsModule)
  },
  {
    path:'home/cart/flipkart',
    loadChildren:()=>import('./empty-basket/empty-basket.module').then(m=>m.EmptyBasketModule)
  },
  {
    path: '**',
    loadChildren:()=>import('./page-not-found/page-not-found.module').then(m=>m.PageNotFoundModule)
  },
  // {
  //   path: 'sample',
  //   component: SampleComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
