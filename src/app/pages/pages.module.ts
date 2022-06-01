import { NgModule } from '@angular/core';

//Modulos
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
  ],
  exports:[
    PagesComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class PagesModule { }
