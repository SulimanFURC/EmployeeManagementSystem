import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayrollWrapperComponent } from './payroll-wrapper/payroll-wrapper.component';
import { EmployeeSalaryComponent } from './employee-salary/employee-salary.component';
import { PaySlipComponent } from './pay-slip/pay-slip.component';

const routes: Routes = [
  {path: 'employee-salary', component:EmployeeSalaryComponent},
  {path: 'employee-pay-slip', component:PaySlipComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollRoutingModule { }
