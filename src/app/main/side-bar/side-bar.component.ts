import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  sidebar: boolean = true;

  constructor(private router: Router) { }

  isActive(routePath: string): boolean {
    return this.router.isActive(routePath, false);
  }

  ngOnInit(): void {
  }

}
