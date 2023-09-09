import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesWrapperComponent } from './expenses-wrapper/expenses-wrapper.component';

const routes: Routes = [
  {path: '', component:ExpensesWrapperComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensesRoutingModule { }
