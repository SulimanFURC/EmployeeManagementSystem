import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-salary',
  templateUrl: './employee-salary.component.html',
  styleUrls: ['./employee-salary.component.scss']
})
export class EmployeeSalaryComponent implements OnInit {

  employees = [
    {
      id: 1,
      name: 'John',
      contact: 123456789,
      join_date: '12/08/2022',
      role: 'Car Machanic',
      basic_pay: 1100,
    },
    {
      id: 2,
      name: 'Jehan',
      contact: 123456789,
      join_date: '12/08/2022',
      role: 'Car Cleaner',
      basic_pay: 1100,
    },
    {
      id: 3,
      name: 'Khan',
      contact: 123456789,
      join_date: '12/08/2022',
      role: 'Oil Changing expert',
      basic_pay: 1100,
    },
    {
      id: 4,
      name: 'Smith',
      contact: 123456789,
      join_date: '12/08/2022',
      role: 'Driver',
      basic_pay: 1100,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
