import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametragePlanFicheComponent } from './parametrage-plan-fiche.component';

describe('ParametragePlanFicheComponent', () => {
  let component: ParametragePlanFicheComponent;
  let fixture: ComponentFixture<ParametragePlanFicheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametragePlanFicheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametragePlanFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
