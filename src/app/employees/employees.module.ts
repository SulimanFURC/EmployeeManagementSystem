import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeWrapperComponent } from './employee-wrapper/employee-wrapper.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SharedModule } from '../shared/shared.module';
import { OvertimeComponent } from './overtime/overtime.component';
import { EmployeeLeaveComponent } from './employee-leave/employee-leave.component';
import { EmployeeAttendanceComponent } from './employee-attendance/employee-attendance.component';


@NgModule({
  declarations: [
    EmployeeWrapperComponent,
    EmployeeListComponent,
    OvertimeComponent,
    EmployeeLeaveComponent,
    EmployeeAttendanceComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule,
  ]
})
export class EmployeesModule { }
