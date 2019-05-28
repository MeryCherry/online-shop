import { CategoryService } from './../../../shared/services/category.service';
import { ProductsService } from 'shared/services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {

  categories$;
  product ={};
  productId;

  constructor(
    private productSrvc: ProductsService, 
    private route: ActivatedRoute,
    private categorySrvc: CategoryService) { }

  ngOnInit() {
    this.categories$ = this.categorySrvc.getAll();
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.productSrvc.get(this.productId).pipe(take(1)).subscribe(
        p => this.product = p
      );
    }
  }

  save( value){

  }

}
