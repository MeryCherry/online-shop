import { CategoryService } from './../../../shared/services/category.service';
import { ProductsService } from 'shared/services/products.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { CategoriesList, Category } from 'shared/models/category';
import { Subscription } from 'rxjs';

@Component({
  selector: 'manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit, OnDestroy {

  categories$;
  categories: Array<CategoriesList>;
  subCategories: Array<Category>;
  product = {};
  productId;
  subscription: Subscription;

  constructor(
    private productSrvc: ProductsService, 
    private route: ActivatedRoute,
    private categorySrvc: CategoryService) { }

  ngOnInit() {
    this.subscription = this.categorySrvc.getAll().subscribe((categories)=>{
      this.categories = categories;
    });
    this.categories$ = this.categorySrvc.getAll();
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.productSrvc.get(this.productId).pipe(take(1)).subscribe(
        p => this.product = p
      );
    }
  }

      ngOnDestroy(){
      this.subscription.unsubscribe();
      }
      save( value){

      }
     getSubCategories(value) {

       this.subCategories = this.categories.find(c => c.key == value).types;
       return this.categories.find(c => c.key == value).types;
    }
}
