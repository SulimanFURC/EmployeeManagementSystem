import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayrollWrapperComponent } from './payroll-wrapper/payroll-wrapper.component';

const routes: Routes = [
  {path: '', component:PayrollWrapperComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollRoutingModule { }
