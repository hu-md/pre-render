import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSsrComponent } from './no-ssr.component';

describe('NoSsrComponent', () => {
  let component: NoSsrComponent;
  let fixture: ComponentFixture<NoSsrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoSsrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoSsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
