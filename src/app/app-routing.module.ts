import { CheckOutComponent } from './check-out/check-out.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
  // {path: 'order-list', component: OrderListComponent},
  // {path: 'order-confirmation/:id', component: OrderConfirmationComponent},
  // {path: 'check-out', component: CheckOutComponent},
  // {path: 'cart', component: ShoppingCartComponent},
  // {path: 'login', component: LoginComponent},
  { path: '', component: ProductsListComponent },
  { path: '**', component: ProductsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
