import { OrderService } from './../shared/services/order.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IOrder } from 'shared/models/order';
import { Subscription } from 'rxjs';

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
