import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagingNavbarComponent } from './managing-navbar.component';

describe('ManagingNavbarComponent', () => {
  let component: ManagingNavbarComponent;
  let fixture: ComponentFixture<ManagingNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagingNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagingNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
