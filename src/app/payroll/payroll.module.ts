import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayrollRoutingModule } from './payroll-routing.module';
import { PayrollWrapperComponent } from './payroll-wrapper/payroll-wrapper.component';
import { EmployeeSalaryComponent } from './employee-salary/employee-salary.component';
import { PaySlipComponent } from './pay-slip/pay-slip.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PayrollWrapperComponent,
    EmployeeSalaryComponent,
    PaySlipComponent
  ],
  imports: [
    CommonModule,
    PayrollRoutingModule,
    SharedModule
  ]
})
export class PayrollModule { }
