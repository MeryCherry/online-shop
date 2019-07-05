import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IOrder } from 'shared/models/order';

import { OrderService } from './../shared/services/order.service';

@Component({
  selector: 'order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss']
})
export class OrderConfirmationComponent implements OnInit, OnDestroy {

  orderID: string;
  subscription: Subscription;
  order: IOrder;

  constructor(private route: ActivatedRoute, private orderSrvc: OrderService) { }

  ngOnInit() {
    this.orderID = this.route.snapshot.paramMap.get('id');
    this.subscription = this.orderSrvc.getByID(this.orderID).subscribe( (o: IOrder) => {
      this.order = o;
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
