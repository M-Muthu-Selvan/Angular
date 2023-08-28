import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { CartComponent } from "./cart.component";

const routes:Routes = [
    {path: 'home/cart',
    component: CartComponent,
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class cartRoutingModule{}