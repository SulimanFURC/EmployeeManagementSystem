import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeSalaryComponent } from './employee-salary/employee-salary.component';
import { PaySlipComponent } from './pay-slip/pay-slip.component';
import { PayrollWrapperComponent } from './payroll-wrapper/payroll-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: PayrollWrapperComponent,
    children: [
      { path: '', redirectTo: 'employee-salary', pathMatch: 'full'  },
      { path: 'employee-salary', component:EmployeeSalaryComponent},
      { path: 'employee-pay-slip', component:PaySlipComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollRoutingModule { }
