import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportWrapperComponent } from './report-wrapper/report-wrapper.component';
import { ExpenseReportComponent } from './expense-report/expense-report.component';

const routes: Routes = [
  {
    path: '',
    component: ReportWrapperComponent,
    children: [
      { path: '', redirectTo: 'expense-report', pathMatch: 'full'  },
      { path: 'expense-report', component: ExpenseReportComponent},
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
