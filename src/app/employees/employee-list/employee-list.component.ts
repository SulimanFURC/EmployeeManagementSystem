import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {


  employees = [
    {
      id: 1,
      name: 'John',
      contact: 123456789,
      join_date: '12/08/2022',
      role: 'Car Machanic'
    },
    {
      id: 2,
      name: 'Jehan',
      contact: 123456789,
      join_date: '12/08/2022',
      role: 'Car Cleaner'
    },
    {
      id: 3,
      name: 'Khan',
      contact: 123456789,
      join_date: '12/08/2022',
      role: 'Oil Changing expert'
    },
    {
      id: 4,
      name: 'Smith',
      contact: 123456789,
      join_date: '12/08/2022',
      role: 'Driver'
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
