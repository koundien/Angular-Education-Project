import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycoursComponent } from './displaycours.component';

describe('DisplaycoursComponent', () => {
  let component: DisplaycoursComponent;
  let fixture: ComponentFixture<DisplaycoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaycoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaycoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
