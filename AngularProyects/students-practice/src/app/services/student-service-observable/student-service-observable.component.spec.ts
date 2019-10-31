import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentServiceObservableComponent } from './student-service-observable.component';

describe('StudentServiceObservableComponent', () => {
  let component: StudentServiceObservableComponent;
  let fixture: ComponentFixture<StudentServiceObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentServiceObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentServiceObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
