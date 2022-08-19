import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationtabComponent } from './reservationtab.component';

describe('ReservationtabComponent', () => {
  let component: ReservationtabComponent;
  let fixture: ComponentFixture<ReservationtabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationtabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
