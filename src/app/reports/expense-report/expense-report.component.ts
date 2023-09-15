import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-expense-report',
  templateUrl: './expense-report.component.html',
  styleUrls: ['./expense-report.component.scss']
})
export class ExpenseReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.RenderChart();
    this.PieChart();
    this.barChart();
  }

  RenderChart () {
    new Chart('myChart', {
      type: 'line',
      data: {
        labels: [
          'Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5',
          'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10',
        ],
        datasets: 
        [
          {
            label: 'Daily Expenses',
            data: [50, 70, 30, 45, 60, 35, 80, 55, 70, 40],
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 2,
            fill: false,
          },
          {
            label: 'Income',
            data: [80, 90, 70, 85, 100, 75, 110, 95, 80, 105],
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            fill: false,
          },
        ],
      },
      options: {
        plugins: {
          subtitle: {
            display: true,
            text: 'Custom Chart Subtitle'
          },
          title: {
            display: true,
            text: 'Custom Chart Title'
          },
          legend: {
              display: false,
              labels: {
                  color: 'rgb(255, 99, 132)'
              }
          }
      },
        scales: {
          x: {
            title: {
              display: false,
              text: 'Days',
            },
          },
          y: {
            title: {
              display: false ,
              text: 'Amount',
            },
            beginAtZero: true,
          },
        }
      }
    });
  }

  PieChart() {
    new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: [
          'Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5',
          'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10',
        ],
        datasets: 
        [
          {
            label: 'Daily Expenses',
            data: [50, 70, 30],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
          },
        ],
      },
      options: {
        aspectRatio: 4/2,
        plugins: {
          legend: {
              display: false,
             
          }
        },
        scales: {
          
          
        }
      }
    });
  }

  barChart(){
    new Chart('barChart', {
      type: 'bar',
      data: {
        labels: [
          'Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5',
          'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10',
        ],
        datasets: 
        [
          {
            label: 'Daily Expenses',
            data: [50, 70, 30, 50, 60, 25, 35, 55, 30, 50],
            backgroundColor: [
              'rgb(13 110 253)',
              'rgb(244 17 39)',
              'rgb(13 202 240)',
            ],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 4/2,
        plugins: {
          legend: {
              display: false,
              labels: {
                  color: 'rgb(255, 99, 132)'
              }
          }
        },
        scales: {
          x: {
            title: {
              display: false,
              text: 'Days',
            },
          },
          y: {
            title: {
              display: false ,
              text: 'Amount',
            },
            beginAtZero: true,
          },
        }
      },
    });
  }

}
