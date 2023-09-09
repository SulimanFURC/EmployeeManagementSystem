import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeWrapperComponent } from './employee-wrapper.component';

describe('EmployeeWrapperComponent', () => {
  let component: EmployeeWrapperComponent;
  let fixture: ComponentFixture<EmployeeWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
