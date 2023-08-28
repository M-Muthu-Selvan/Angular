import { Routes,RouterModule } from "@angular/router";
import { SampleComponent } from "./sample.component";
import { NgModule } from "@angular/core";
import { canActivateGuard } from "../guard/canactivate.guard";


const routes: Routes = [
    {
        path:'sample',
        component:SampleComponent,
        canActivate: [canActivateGuard]
    },
    {
        path:'login',
        redirectTo: 'sample',
        pathMatch:'full'
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SampleRoutingModule{}
