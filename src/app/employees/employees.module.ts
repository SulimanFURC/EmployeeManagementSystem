import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SharedModule } from '../shared/shared.module';
import { OvertimeComponent } from './overtime/overtime.component';
import { EmployeeLeaveComponent } from './employee-leave/employee-leave.component';
import { EmployeeAttendanceComponent } from './employee-attendance/employee-attendance.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { EmployeeWrapperComponent } from './employee-wrapper/employee-wrapper.component';

@NgModule({
  declarations: [
    EmployeeListComponent,
    OvertimeComponent,
    EmployeeLeaveComponent,
    EmployeeAttendanceComponent,
    EmployeeProfileComponent,
    EmployeeWrapperComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule,
    TabsModule.forRoot(),

  ]
})
export class EmployeesModule { }
