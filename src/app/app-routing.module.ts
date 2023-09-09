import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'Dashboard', pathMatch: 'full'  },

  { 
    path: 'Dashboard',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule), 
  },
  {
    path: 'Employees',
    loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule),
  },
  {
    path: 'Accounts',
    loadChildren: () => import('./accounting/accounting.module').then(m => m.AccountingModule),
  },
  {
    path: 'Payroll',
    loadChildren: () => import('./payroll/payroll.module').then(m => m.PayrollModule),
  },
  {
    path: 'Reports',
    loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule),
  },
  {
    path: 'Expenses',
    loadChildren: () => import('./expenses/expenses.module').then(m => m.ExpensesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
