import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountingWrapperComponent } from './accounting-wrapper/accounting-wrapper.component';
import { PaymentsComponent } from './payments/payments.component';
import { DailyExpensesComponent } from './daily-expenses/daily-expenses.component';
import { InvoicesComponent } from './invoices/invoices.component';

const routes: Routes = [
  {path: '', component:AccountingWrapperComponent},
  {path: 'payment', component: PaymentsComponent},
  {path: 'expenses', component: DailyExpensesComponent},
  {path: 'invoices', component: InvoicesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule { }
