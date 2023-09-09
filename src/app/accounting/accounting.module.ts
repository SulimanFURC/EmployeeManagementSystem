import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountingRoutingModule } from './accounting-routing.module';
import { AccountingWrapperComponent } from './accounting-wrapper/accounting-wrapper.component';


@NgModule({
  declarations: [
    AccountingWrapperComponent
  ],
  imports: [
    CommonModule,
    AccountingRoutingModule
  ]
})
export class AccountingModule { }
