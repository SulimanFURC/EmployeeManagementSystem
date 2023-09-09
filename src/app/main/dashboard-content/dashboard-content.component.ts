import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss']
})
export class DashboardContentComponent implements OnInit {

  months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  emp = [
    {
      id: 1,
      Name: 'Asad',
      FatherName: 'khan',
      CNIC: 12364588,
      Contact_No: 8745236987,
      Emergency_No: 7744536987,
    },
    {
      id: 2,
      Name: 'Suliman',
      FatherName: 'khan',
      CNIC: 12364588,
      Contact_No: 8745236987,
      Emergency_No: 7744536987,
    },
    {
      id: 3,
      Name: 'Samir',
      FatherName: 'khan',
      CNIC: 12364588,
      Contact_No: 8745236987,
      Emergency_No: 7744536987,
    },
    {
      id: 4,
      Name: 'Zeeshan',
      FatherName: 'khan',
      CNIC: 12364588,
      Contact_No: 8745236987,
      Emergency_No: 7744536987,
    },
  ]

  payroll = [
    {
      id: 1,
      Invoice_id: '#INV-0001',
      EmpName: 'Suliman',
      Payment_type: 'Cash',
      Payment_date: '12/01/2023',
      Paid_amount: 650,
    },
    {
      id: 2,
      Invoice_id: '#INV-0002',
      EmpName: 'Samir',
      Payment_type: 'Cash',
      Payment_date: '20/01/2023',
      Paid_amount: 1000,
    },
    {
      id: 3,
      Invoice_id: '#INV-0003',
      EmpName: 'Asad',
      Payment_type: 'Cash',
      Payment_date: '01/01/2023',
      Paid_amount: 350,
    },
    {
      id: 4,
      Invoice_id: '#INV-0004',
      EmpName: 'Zeeshan',
      Payment_type: 'Online',
      Payment_date: '15/01/2023',
      Paid_amount: 650,
    },
  ]

  constructor() {
  
   }

  ngOnInit(): void {
    this.RenderChart();
  }

  RenderChart () {
    new Chart('myChart', {
      type: 'doughnut',
      data: {
        labels: ['Income', 'Expense', 'Total Employee','Total Salary'],
        datasets: 
        [
          {
          label: 'Salary',
          data: [12000, 5500, 20, 3600],
          },
        ],
      },
      options: {
        cutout: 80,
        plugins: {
          legend: {
              display: false,
              labels: {
                  color: 'rgb(255, 99, 132)'
              }
          }
      },
        scales: {
          y: {
            display: false
          }
        }
      }
    });
  }

}
