import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overtime',
  templateUrl: './overtime.component.html',
  styleUrls: ['./overtime.component.scss']
})
export class OvertimeComponent implements OnInit {

  overtime = [
    {
      id: 1,
      name: 'Suliman',
      overtime_date: '12/08/2023',
      overtime_hours: '1.2Hr',
      description: 'Extra time working',
      status: 'Approved',
      approved_by: 'Khan',
    },
    {
      id: 2,
      name: 'Suliman',
      overtime_date: '12/08/2023',
      overtime_hours: '1.2Hr',
      description: 'Extra time working',
      status: 'Approved',
      approved_by: 'Khan',
    },
    {
      id: 3,
      name: 'Suliman',
      overtime_date: '12/08/2023',
      overtime_hours: '1.2Hr',
      description: 'Extra time working',
      status: 'Approved',
      approved_by: 'Khan',
    },
    {
      id: 4,
      name: 'Suliman',
      overtime_date: '12/08/2023',
      overtime_hours: '1.2Hr',
      description: 'Extra time working',
      status: 'Approved',
      approved_by: 'Khan',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
