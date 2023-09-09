import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayrollRoutingModule } from './payroll-routing.module';
import { PayrollWrapperComponent } from './payroll-wrapper/payroll-wrapper.component';


@NgModule({
  declarations: [
    PayrollWrapperComponent
  ],
  imports: [
    CommonModule,
    PayrollRoutingModule
  ]
})
export class PayrollModule { }
