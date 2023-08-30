import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { SampleRoutingModule } from './sample-routing.module';
import { ServiceService } from '../services/service.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import {  ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [SampleComponent],
  imports: [
    CommonModule,
    SampleRoutingModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule
  ],
  exports: [SampleComponent],
  providers:[ServiceService]
})
export class SampleModule { }
