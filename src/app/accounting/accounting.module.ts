import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountingRoutingModule } from './accounting-routing.module';
import { AccountingWrapperComponent } from './accounting-wrapper/accounting-wrapper.component';
import { PaymentsComponent } from './payments/payments.component';
import { DailyExpensesComponent } from './daily-expenses/daily-expenses.component';
import { InvoicesComponent } from './invoices/invoices.component';


@NgModule({
  declarations: [
    AccountingWrapperComponent,
    PaymentsComponent,
    DailyExpensesComponent,
    InvoicesComponent
  ],
  imports: [
    CommonModule,
    AccountingRoutingModule
  ]
})
export class AccountingModule { }
