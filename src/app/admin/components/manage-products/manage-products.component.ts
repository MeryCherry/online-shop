import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';
import { Product } from 'shared/models/product';
import { ProductsService } from 'shared/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit, OnDestroy {

  // sorting element for columns
  @ViewChild(MatSort) sort: MatSort;
  // pagination element for columns
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // inline type, each product has property
  // title of type string
  // products: { title: string}[];
  products: Product[];
  subscription: Subscription;
  // this is column names definition for angular material
  // data table
  displayedColumns: string[] = ['title', 'price', 'edit'];
  dataSource: MatTableDataSource<Product>;
  itemCount;

  constructor(private productsService: ProductsService, private router: Router) {}

   // filtering method, it filters by title, filtering is done on client
   filter(query: string) {
    // this.dataSource.filter = query.trim().toLowerCase();
    let filteredProducts = (query) ? this.products.filter
     (p => p.title.toLowerCase().includes(query.toLowerCase())) :
     this.products;
    this.initTable(filteredProducts);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
 }
 delete(id){

    if (!confirm('Are you sure you want to delete this product?')) {return; }
    this.productsService.delete(id);
    this.router.navigate(['/manage-products']); 
 }
  private initTable(products: Product[]) {
    // binding sorting and paginating for data in table
    this.dataSource = new MatTableDataSource(products);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.itemCount = this.dataSource.data.length;
}
  ngOnInit() {
  this.subscription = this.productsService.getAll().subscribe(
    (prod: Product[]) => {
      this.products = prod;
      this.initTable(prod);
    });
  }
  ngOnDestroy() {
  this.subscription.unsubscribe();
  }
}
