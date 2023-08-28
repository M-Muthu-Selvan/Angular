import { Router, RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { MissingCardsComponent } from "./missing-cards.component";

const routes:Routes = [{
    path: 'home/cart/flipkart',
    component: MissingCardsComponent
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MissingCardsRoutingModule{}