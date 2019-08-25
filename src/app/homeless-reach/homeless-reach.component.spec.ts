import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomelessReachComponent } from './homeless-reach.component';

describe('HomelessReachComponent', () => {
  let component: HomelessReachComponent;
  let fixture: ComponentFixture<HomelessReachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomelessReachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomelessReachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
