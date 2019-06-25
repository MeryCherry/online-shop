import { Component, OnInit } from '@angular/core';
import { OrderService } from 'shared/services/order.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { IOrder } from 'shared/models/order';

@Component({
  selector: 'order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  orderId: string;
  order: IOrder;
  constructor(private route: ActivatedRoute, private orderSrvc: OrderService) { }

  ngOnInit() {
    this.orderId = this.route.snapshot.paramMap.get('id');
    if (this.orderId) {
      this.orderSrvc.getByID(this.orderId).pipe(take(1)).subscribe(
        (o: IOrder) => this.order = o
      );
    }
  }

}
