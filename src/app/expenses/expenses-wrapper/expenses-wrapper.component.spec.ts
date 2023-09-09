import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesWrapperComponent } from './expenses-wrapper.component';

describe('ExpensesWrapperComponent', () => {
  let component: ExpensesWrapperComponent;
  let fixture: ComponentFixture<ExpensesWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensesWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
