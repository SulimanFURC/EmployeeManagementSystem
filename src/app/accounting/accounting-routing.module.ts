import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountingWrapperComponent } from './accounting-wrapper/accounting-wrapper.component';

const routes: Routes = [
  {path: '', component:AccountingWrapperComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule { }
