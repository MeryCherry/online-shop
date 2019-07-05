import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Order, ShippingDetails } from 'shared/models/order';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { AuthService } from 'shared/services/auth.service';
import { OrderService } from 'shared/services/order.service';

@Component({
  selector: 'shipping-details-form',
  templateUrl: './shipping-details-form.component.html',
  styleUrls: ['./shipping-details-form.component.scss']
})
export class ShippingDetailsFormComponent implements OnInit, OnDestroy {

  @Input('cart') cart: ShoppingCart;
  shipping: ShippingDetails;
  userID: string;
  subscription: Subscription;

  constructor(private router: Router, private orderSrvc: OrderService, private authService: AuthService) { }

  ngOnInit() {
    this.shipping = new ShippingDetails();
    this.subscription = this.authService.user$.subscribe(user => this.userID = user.uid);
  }

  async sendOrder() {
    let newOrder = new Order(this.userID, this.cart, this.shipping);
    let result = await this.orderSrvc.create(newOrder);
    this.router.navigate(['/order-confirmation', result.key]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
