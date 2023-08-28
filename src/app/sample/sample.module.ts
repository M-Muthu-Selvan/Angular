import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { SampleRoutingModule } from './sample-routing.module';
import { ServiceService } from '../services/service.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [SampleComponent],
  imports: [
    CommonModule,
    SampleRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [SampleComponent],
  providers:[ServiceService]
})
export class SampleModule { }
