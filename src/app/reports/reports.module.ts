import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsWrapperComponent } from './reports-wrapper/reports-wrapper.component';


@NgModule({
  declarations: [
    ReportsWrapperComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
