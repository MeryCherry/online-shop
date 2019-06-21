import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemsQuantityComponent } from './cart-items-quantity.component';

describe('CartItemsQuantityComponent', () => {
  let component: CartItemsQuantityComponent;
  let fixture: ComponentFixture<CartItemsQuantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartItemsQuantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemsQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
