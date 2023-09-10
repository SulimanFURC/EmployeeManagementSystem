import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-leave',
  templateUrl: './employee-leave.component.html',
  styleUrls: ['./employee-leave.component.scss']
})
export class EmployeeLeaveComponent implements OnInit {


  employee_leave = [
    {
      id: 1,
      name: 'John',
      leave_type: 'Casual',
      leave_date: '12/08/2022 - 16/08/2022',
      leave_reason: 'Going to Family Function'
    },
    {
      id: 2,
      name: 'John',
      leave_type: 'Medical',
      leave_date: '12/08/2022 - 20/08/2022',
      leave_reason: 'Attend Birthday party'
    },
    {
      id: 3,
      name: 'John',
      leave_type: 'Going Home',
      leave_date: '12/08/2022 - 15/08/2022',
      leave_reason: 'Going to Development'
    },
    {
      id: 4,
      name: 'John',
      leave_type: 'Maternity Leave',
      leave_date: '12/08/2022 - 12/09/2022',
      leave_reason: 'Going to Holiday'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
