import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-modal',
  templateUrl: './small-modal.component.html',
  styleUrls: ['./small-modal.component.scss']
})
export class SmallModalComponent implements OnInit {

  @Input() title: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
