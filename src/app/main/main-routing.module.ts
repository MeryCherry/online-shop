
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from 'app/order-list/order-list.component';
import { OrderConfirmationComponent } from 'app/order-confirmation/order-confirmation.component';
import { ShoppingCartComponent } from 'app/shopping-cart/shopping-cart.component';
import { LoginComponent } from 'app/login/login.component';
import { CheckOutComponent } from 'app/check-out/check-out.component';
import { ProductsListComponent } from 'app/products-list/products-list.component';
import { AuthGuardService as AuthGuard } from 'shared/services/authguard.service';

const routes: Routes = [
  {path: 'order-list', component: OrderListComponent, canActivate: [AuthGuard]},
  {path: 'order-confirmation/:id', component: OrderConfirmationComponent, canActivate: [AuthGuard]},
  {path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard]},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'login', component: LoginComponent},
  { path: '', component: ProductsListComponent },
  { path: '**', component: ProductsListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
