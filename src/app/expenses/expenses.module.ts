import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesWrapperComponent } from './expenses-wrapper/expenses-wrapper.component';


@NgModule({
  declarations: [
    ExpensesWrapperComponent
  ],
  imports: [
    CommonModule,
    ExpensesRoutingModule
  ]
})
export class ExpensesModule { }
