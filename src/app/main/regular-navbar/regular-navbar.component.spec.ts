import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularNavbarComponent } from './regular-navbar.component';

describe('RegularNavbarComponent', () => {
  let component: RegularNavbarComponent;
  let fixture: ComponentFixture<RegularNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
