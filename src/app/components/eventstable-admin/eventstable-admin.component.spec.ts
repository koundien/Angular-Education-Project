import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventstableAdminComponent } from './eventstable-admin.component';

describe('EventstableAdminComponent', () => {
  let component: EventstableAdminComponent;
  let fixture: ComponentFixture<EventstableAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventstableAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventstableAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
