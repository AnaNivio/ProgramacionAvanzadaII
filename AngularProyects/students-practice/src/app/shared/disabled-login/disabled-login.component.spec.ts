import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledLoginComponent } from './disabled-login.component';

describe('DisabledLoginComponent', () => {
  let component: DisabledLoginComponent;
  let fixture: ComponentFixture<DisabledLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisabledLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
