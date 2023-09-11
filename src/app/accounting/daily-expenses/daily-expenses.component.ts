import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-expenses',
  templateUrl: './daily-expenses.component.html',
  styleUrls: ['./daily-expenses.component.scss']
})
export class DailyExpensesComponent implements OnInit {

  expenses = [
    {
      id: 1,
      expense_name: 'Lunch',
      date: new Date(),
      expense_amount: 1200,
      amount_paid: 1000,
      payment_mode: 'Cash',
      expense_attachment: 'No attachment',
      description: 'this is the description of the daily expenses',
    },
    {
      id: 2,
      expense_name: 'Car Parts',
      date: new Date(),
      expense_amount: 1200,
      amount_paid: 1000,
      payment_mode: 'Installment',
      expense_attachment: 'No attachment',
      description: 'this is the description of the daily expenses',
    },
    {
      id: 3,
      expense_name: 'Dinner',
      date: new Date(),
      expense_amount: 1200,
      amount_paid: 1000,
      payment_mode: 'Cash',
      expense_attachment: 'No attachment',
      description: 'this is the description of the daily expenses',
    },
    {
      id: 4,
      expense_name: 'Tea',
      date: new Date(),
      expense_amount: 1200,
      amount_paid: 1000,
      payment_mode: 'Online Bank Payment',
      expense_attachment: 'No attachment',
      description: 'this is the description of the daily expenses',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
