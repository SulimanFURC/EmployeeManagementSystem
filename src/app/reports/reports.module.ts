import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsWrapperComponent } from './reports-wrapper/reports-wrapper.component';
import { ExpenseReportComponent } from './expense-report/expense-report.component';
import { Chart } from 'chart.js';
import { registerables } from 'chart.js';
import { ReportWrapperComponent } from './report-wrapper/report-wrapper.component';
Chart.register(...registerables);

@NgModule({
  declarations: [
    ReportsWrapperComponent,
    ExpenseReportComponent,
    ReportWrapperComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
