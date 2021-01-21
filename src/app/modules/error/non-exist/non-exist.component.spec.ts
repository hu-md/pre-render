import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonExistComponent } from './non-exist.component';

describe('NonExistComponent', () => {
  let component: NonExistComponent;
  let fixture: ComponentFixture<NonExistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonExistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonExistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
