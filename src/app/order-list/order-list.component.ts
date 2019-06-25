import { OrderService } from 'shared/services/order.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription, of } from 'rxjs';
import { AuthService } from 'shared/services/auth.service';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { IOrder } from 'shared/models/order';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit, OnDestroy  {

  // sorting element for columns
 @ViewChild(MatSort) sort: MatSort;
  // pagination element for columns
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<IOrder>;
  userID: string;
  subscription: Subscription;
  itemCount;
  orders = {};
    // this is column names definition for angular material
  // data table
  displayedColumns: string[] = ['date', 'totalPrice', 'status', 'view'];
  constructor(private authService: AuthService, private orderSrvc: OrderService) { }

  ngOnInit() {
    this.subscription = this.orderSrvc.getCurrentUserOrderList().subscribe( (o: IOrder[]) => {
      this.orders = o;
      this.initTable(o);
    }
    );
  }

  private initTable(orders: IOrder[]) {
    // binding sorting and paginating for data in table
    this.dataSource = new MatTableDataSource(orders);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.itemCount = this.dataSource.data.length;
}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
