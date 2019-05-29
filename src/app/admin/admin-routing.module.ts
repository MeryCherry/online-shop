import { ProductFormComponent } from './components/manage-products/product-form/product-form.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from 'shared/services/authguard.service';
import { AdminAuthGuardService as AdminGuard } from './services/admin-auth-guard.service';
import { ManageOrdersComponent } from './components/manage-orders/manage-orders.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';


const routes: Routes = [
    {path: 'manage-users', component: ManageUsersComponent, canActivate: [AuthGuard, AdminGuard]},
    {path: 'manage-orders', component: ManageOrdersComponent, canActivate: [AuthGuard, AdminGuard]},
    {path: 'manage-products/new', component: ProductFormComponent, canActivate: [AuthGuard, AdminGuard]},
    {path: 'manage-products/:id', component: ProductFormComponent, canActivate: [AuthGuard, AdminGuard]},
    {path: 'manage-products', component: ManageProductsComponent, canActivate: [AuthGuard, AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[
    AdminGuard
  ]
})
export class AdminRoutingModule { }