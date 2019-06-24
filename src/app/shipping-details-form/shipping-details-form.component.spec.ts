import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingDetailsFormComponent } from './shipping-details-form.component';

describe('ShippingDetailsFormComponent', () => {
  let component: ShippingDetailsFormComponent;
  let fixture: ComponentFixture<ShippingDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
