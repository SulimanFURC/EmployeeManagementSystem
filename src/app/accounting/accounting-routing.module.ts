import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountingWrapperComponent } from './accounting-wrapper/accounting-wrapper.component';
import { PaymentsComponent } from './payments/payments.component';
import { DailyExpensesComponent } from './daily-expenses/daily-expenses.component';

const routes: Routes = [
  {path: 'payments', component:PaymentsComponent},
  {path: 'daily-expense', component:DailyExpensesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule { }
