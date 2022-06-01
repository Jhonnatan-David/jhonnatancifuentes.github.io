import { NgModule } from '@angular/core';

//Modulos
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';



@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
  ],
  exports:[
    HeaderComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    CommonModule,

  ],
})
export class SharedModule { }
