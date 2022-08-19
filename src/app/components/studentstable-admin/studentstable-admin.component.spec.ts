import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentstableAdminComponent } from './studentstable-admin.component';

describe('StudentstableAdminComponent', () => {
  let component: StudentstableAdminComponent;
  let fixture: ComponentFixture<StudentstableAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentstableAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentstableAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
