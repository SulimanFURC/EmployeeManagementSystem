import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyModalComponent } from './my-modal/my-modal.component';
import { SmallModalComponent } from './small-modal/small-modal.component';



@NgModule({
  declarations: [
    MyModalComponent,
    SmallModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MyModalComponent, SmallModalComponent]
})
export class SharedModule { }
