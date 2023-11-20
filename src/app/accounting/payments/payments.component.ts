import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  constructor() { }

  payments = [
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

  ngOnInit(): void {
  }

}
