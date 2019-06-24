import { Subscription } from 'rxjs';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ShippingDetails, Order } from 'shared/models/order';
import { OrderService } from 'shared/services/order.service';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { AuthService } from 'shared/services/auth.service';
import { Router } from '@angular/router';

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
    let newOrder = new Order(this.userID, this.cart.items, this.shipping);
    let result = await this.orderSrvc.create(newOrder);
    this.router.navigate(['/order-confirmation', result.key]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
