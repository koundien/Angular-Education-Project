import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachertableAdminComponent } from './teachertable-admin.component';

describe('TeachertableAdminComponent', () => {
  let component: TeachertableAdminComponent;
  let fixture: ComponentFixture<TeachertableAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachertableAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachertableAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
