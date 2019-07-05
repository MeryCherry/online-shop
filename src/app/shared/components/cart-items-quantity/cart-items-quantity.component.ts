import { Component, Input } from '@angular/core';
import { Product } from 'shared/models/product';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { CartService } from 'shared/services/cart.service';

@Component({
  selector: 'cart-items-quantity',
  templateUrl: './cart-items-quantity.component.html',
  styleUrls: ['./cart-items-quantity.component.scss']
})
export class CartItemsQuantityComponent  {

  @Input('product') product: Product;
  @Input('cart') cart: ShoppingCart;

  constructor(private cartSrvc: CartService) { }

  addCartItem() {
    this.cartSrvc.addToCart(this.product);
  }

  removeCartItem() {
    this.cartSrvc.removeFromCart(this.product);
  }

}
