import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollWrapperComponent } from './payroll-wrapper.component';

describe('PayrollWrapperComponent', () => {
  let component: PayrollWrapperComponent;
  let fixture: ComponentFixture<PayrollWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
