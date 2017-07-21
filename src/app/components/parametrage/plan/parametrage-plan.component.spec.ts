import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametragePlanComponent } from './parametrage-plan.component';

describe('ParametragePlanComponent', () => {
  let component: ParametragePlanComponent;
  let fixture: ComponentFixture<ParametragePlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametragePlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametragePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
