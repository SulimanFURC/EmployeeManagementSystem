import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { MainRoutingModule } from './main-routing.module';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import { Chart } from 'chart.js';
import { registerables } from 'chart.js';
Chart.register(...registerables);


@NgModule({
  declarations: [
    MainWrapperComponent,
    SideBarComponent,
    HeaderComponent,
    DashboardContentComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
  ],
  exports: [MainWrapperComponent]
})
export class MainModule { }
