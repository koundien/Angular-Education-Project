import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiqueComponent } from './dynamique.component';

describe('DynamiqueComponent', () => {
  let component: DynamiqueComponent;
  let fixture: ComponentFixture<DynamiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
