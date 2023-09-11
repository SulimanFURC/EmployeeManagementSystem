import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeLeaveComponent } from './employee-leave/employee-leave.component';
import { EmployeeAttendanceComponent } from './employee-attendance/employee-attendance.component';
import { OvertimeComponent } from './overtime/overtime.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';

const routes: Routes = [
  {path: 'EmployeesList', component: EmployeeListComponent},
  {path: 'EmployeesLeave', component: EmployeeLeaveComponent},
  {path: 'EmployeesAttendace', component: EmployeeAttendanceComponent},
  {path: 'EmployeesOvertime', component: OvertimeComponent},
  {path: 'employee-profile', component: EmployeeProfileComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
