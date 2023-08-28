import {NgModule} from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { SampleComponent } from '../sample/sample.component';
import { canActivateChildGuard } from '../guard/canactivatechild.guard';

const routes: Routes = [
    {path:'',
    component: LoginComponent,
    children: [{path:'samesample', component: SampleComponent}],
    canActivateChild: [canActivateChildGuard]
    }
   ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LoginRoutingModule {}