import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsWrapperComponent } from './reports-wrapper/reports-wrapper.component';

const routes: Routes = [
  { path: '', component:ReportsWrapperComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
