import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  payments = [
    {
      id: 1,
      employee_name: 'John',
      date: '12/08/2022',
      type: 'Half Month Salary',
      amount: 1200,
    },
    {
      id: 2,
      employee_name: 'John',
      date: '12/08/2022',
      type: 'Full Month Salary',
      amount: 1200,
    },
    {
      id: 3,
      employee_name: 'John',
      date: '12/08/2022',
      type: 'Need Base Salary',
      amount: 1200,
    },
    {
      id: 4,
      employee_name: 'John',
      date: '12/08/2022',
      type: 'Advance Salary',
      amount: 1200,
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
