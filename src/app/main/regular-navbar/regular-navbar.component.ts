import { CartService } from 'shared/services/cart.service';
import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'shared/models/user';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'shared/models/shopping-cart';


@Component({
  selector: 'regular-navbar',
  templateUrl: './regular-navbar.component.html',
  styleUrls: ['./regular-navbar.component.scss']
})
export class RegularNavbarComponent implements OnInit {

  apiUser: User;
  cart$: Observable<ShoppingCart>;

  constructor(private auth: AuthService, private router: Router, private cartSrvc: CartService) {
  }

  async ngOnInit() {
    this.auth.apiUser$.subscribe(user => { this.apiUser = user;  } );
    this.cart$ = await this.cartSrvc.getCart();
   }

   logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

}
