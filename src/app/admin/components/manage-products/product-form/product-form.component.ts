import { CategoryService } from 'shared/services/category.service';
import { ProductsService } from 'shared/services/products.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take, switchMap, map, delay } from 'rxjs/operators';
import { CategoriesList, Category } from 'shared/models/category';
import { Subscription, forkJoin, of, interval, Observable } from 'rxjs';
import { Product } from 'shared/models/product';
@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, OnDestroy {

  categories$;
  categories: Array<CategoriesList>;
  subCategories: Array<Category>;
  product = {};
  productId;
  subscription: Subscription;
  headerText = '';
  constructor(
    private productSrvc: ProductsService, 
    private route: ActivatedRoute,
    private router: Router,
    private categorySrvc: CategoryService) {}

  ngOnInit() {
    this.subscription = this.categorySrvc.getAll().subscribe((categories) => {
      this.categories = categories;
    });
    this.categories$ = this.categorySrvc.getAll();
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      forkJoin(
        this.productSrvc.get(this.productId).pipe(take(1)),
        this.categorySrvc.getAll().pipe(take(1))
      ).pipe(map(([p, categories]) => {
        this.product = p;
        this.categories = categories;
        let prod = p as Product;
        this.getSubCategories(prod.categoryType);
        return { p, categories };
      })).subscribe();
      this.headerText = 'Edit product';
    }
     else { this.headerText = 'Create new product';  }
  }

      ngOnDestroy(){
      this.subscription.unsubscribe();
      }
      save( value) {
        this.router.navigate(['/manage-products']);
        if (this.productId) {
          this.productSrvc.update(this.productId, value);
         } else {
          this.productSrvc.create(value);
         }
      }
     getSubCategories(value) {
       this.subCategories = this.categories.find(c => c.key == value).types;
       return this.categories.find(c => c.key == value).types;
    }

}
