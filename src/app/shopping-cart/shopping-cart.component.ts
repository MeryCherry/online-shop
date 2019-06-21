import { Product } from './../shared/models/product';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'shared/services/cart.service';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cart$;

  constructor(private cartSrvc: CartService) { }

  async ngOnInit() {
    this.cart$ = await this.cartSrvc.getCart();
  }

  clearCart() {
    this.cartSrvc.clearCartItems();
  }

  removeAll(item: Product) {
    this.cartSrvc.removeFromCartAllOfType(item);
  }
}
