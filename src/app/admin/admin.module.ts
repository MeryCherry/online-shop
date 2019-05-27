import { NgModule } from '@angular/core';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { ManageOrdersComponent } from './components/manage-orders/manage-orders.component';
import { SharedModule } from 'shared/shared.module';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { AdminRoutingModule } from './admin-routing.module';
import { ManagingNavbarComponent } from './components/managing-navbar/managing-navbar.component';

@NgModule({
  declarations: [
    ManageProductsComponent,
    ManageUsersComponent,
    ManageOrdersComponent,
    ManagingNavbarComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  providers: [
    AdminAuthGuardService
  ],
  exports: [
    ManagingNavbarComponent
  ]
})
export class AdminModule { }
