import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursestableAdminComponent } from './coursestable-admin.component';

describe('CoursestableAdminComponent', () => {
  let component: CoursestableAdminComponent;
  let fixture: ComponentFixture<CoursestableAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursestableAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursestableAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
