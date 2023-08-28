import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmptyBasketComponent } from "./empty-basket.component";

const routes:Routes = [
    {path: 'home/cart/grocery',
    component: EmptyBasketComponent,
}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class EmptyBasketRoutingModule{}