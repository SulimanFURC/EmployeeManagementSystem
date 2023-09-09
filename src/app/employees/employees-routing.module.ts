import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeWrapperComponent } from './employee-wrapper/employee-wrapper.component';

const routes: Routes = [
  {path: '', component:EmployeeWrapperComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
