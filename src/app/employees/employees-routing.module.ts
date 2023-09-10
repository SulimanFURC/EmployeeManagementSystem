import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeWrapperComponent } from './employee-wrapper/employee-wrapper.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeLeaveComponent } from './employee-leave/employee-leave.component';
import { EmployeeAttendanceComponent } from './employee-attendance/employee-attendance.component';

const routes: Routes = [
  // {path: '', component:EmployeeWrapperComponent},
  {path: 'EmployeesList', component: EmployeeListComponent},
  {path: 'EmployeesLeave', component: EmployeeLeaveComponent},
  {path: 'EmployeesAttendace', component: EmployeeAttendanceComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
