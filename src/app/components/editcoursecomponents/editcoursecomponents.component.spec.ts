import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcoursecomponentsComponent } from './editcoursecomponents.component';

describe('EditcoursecomponentsComponent', () => {
  let component: EditcoursecomponentsComponent;
  let fixture: ComponentFixture<EditcoursecomponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcoursecomponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcoursecomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
