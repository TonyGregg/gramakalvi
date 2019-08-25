import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthClinicComponent } from './health-clinic.component';

describe('HealthClinicComponent', () => {
  let component: HealthClinicComponent;
  let fixture: ComponentFixture<HealthClinicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthClinicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
