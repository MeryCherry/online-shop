import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Subscription } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { IOrder, Status } from 'shared/models/order';
import { AuthService } from 'shared/services/auth.service';
import { OrderService } from 'shared/services/order.service';
import { RolesService } from 'shared/services/roles.service';

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
  isAdmin: boolean;
  isAll: boolean;
  // for managing status
  statusList = Status;
  keys = Object.keys;
  isEdit = false;
  prevStatusValue;
  userID: string;
  subscription: Subscription;
  itemCount;
  orders = {};
    // this is column names definition for angular material
  // data table
  displayedColumns: string[] = ['date', 'totalPrice', 'status', 'view'];
  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService,
              private orderSrvc: OrderService,
              private rolesSrvc: RolesService) { }

  ngOnInit() {
    // execute multiple observables
    // check if user is admin and if load 
    // list for all orders
    this.subscription = this.getOrderList().subscribe( (o: IOrder[]) => {
      this.orders = o;
      this.initTable(o);
    });
  }

  private getOrderList() {
   return forkJoin(
      this.route.queryParamMap.pipe(take(1)),
      this.rolesSrvc.isCurrentUserAdmin().pipe(take(1))
      ).pipe(map(([params, isAdmin]) => {
        this.isAdmin = isAdmin;
        return (params.has('filter') && isAdmin);
      })).pipe(switchMap(res => {
        if (res) {
          return this.orderSrvc.getAll();
        }
        return this.orderSrvc.getCurrentUserOrderList();
      }));
  }

  private initTable(orders: IOrder[]) {
    // binding sorting and paginating for data in table
    this.dataSource = new MatTableDataSource(orders);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.itemCount = this.dataSource.data.length;
}
  delete(id) {
    if (!confirm('Are you sure you want to delete this order?')) {return; }
    this.orderSrvc.delete(id);
    this.router.navigate(['/order-list']); 
}
save(elem){
  this.orderSrvc.update(elem.key, elem);
  this.isEdit = !this.isEdit;
}
  cancel(elem){
    elem.status = this.prevStatusValue;
    this.isEdit = !this.isEdit;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
