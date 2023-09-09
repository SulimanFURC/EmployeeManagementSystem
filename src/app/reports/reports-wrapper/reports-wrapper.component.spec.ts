import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsWrapperComponent } from './reports-wrapper.component';

describe('ReportsWrapperComponent', () => {
  let component: ReportsWrapperComponent;
  let fixture: ComponentFixture<ReportsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
