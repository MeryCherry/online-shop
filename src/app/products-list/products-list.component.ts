import { CartService } from 'shared/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'shared/services/products.service';
import { Product } from 'shared/models/product';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'shared/models/shopping-cart';
@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  productsList: Product[] = [];
  filteredProducts: Product[];
  category: string;
  cart$: Observable<ShoppingCart>;

  constructor(private route: ActivatedRoute,
              private productService: ProductsService,
              private cartSrvc: CartService) { }

  async ngOnInit() {
         this.cart$ =  await this.cartSrvc.getCart();
        this.populateProducts();
  }

  private populateProducts() {
    this.productService.getAll().pipe(switchMap(
      (prod: Product[]) => {
          this.productsList = prod;
          return this.route.queryParamMap;
      })).subscribe(
        params => {
          this.category = params.get('category');
          this.applyFilter();
        });
   }
   private applyFilter() {
    this.filteredProducts = (this.category) ?
    this.productsList.filter(p => p.categoryType === this.category) :
    this.productsList;
   }

}
