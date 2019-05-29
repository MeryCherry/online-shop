import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'shared/models/product';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  // @Input('shopping-cart') shoppingCart: ShoppingCart;
  constructor() { }

  ngOnInit() {
  }

}
