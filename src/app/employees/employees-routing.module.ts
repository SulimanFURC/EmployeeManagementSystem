import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeLeaveComponent } from './employee-leave/employee-leave.component';
import { EmployeeAttendanceComponent } from './employee-attendance/employee-attendance.component';
import { OvertimeComponent } from './overtime/overtime.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeWrapperComponent } from './employee-wrapper/employee-wrapper.component';

const routes: Routes = [
 {
  path: '',
  component: EmployeeWrapperComponent,
  children: [
    { path: '', redirectTo: 'employee-list', pathMatch: 'full'  },
    {path: 'employee-list', component: EmployeeListComponent},
    {path: 'employee-leave', component: EmployeeLeaveComponent},
    {path: 'employee-attendance', component: EmployeeAttendanceComponent},
    {path: 'employee-overtime', component: OvertimeComponent},
    {path: 'employee-profile', component: EmployeeProfileComponent},
  ]
 }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
