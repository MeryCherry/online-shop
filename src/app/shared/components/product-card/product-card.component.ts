import { CartService } from 'shared/services/cart.service';
import { Component, Input } from '@angular/core';
import { Product } from 'shared/models/product';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('cart') cart: ShoppingCart;
  constructor(private cartSrvc: CartService) { }

  addToCart() {
    this.cartSrvc.addToCart(this.product);
  }

}
