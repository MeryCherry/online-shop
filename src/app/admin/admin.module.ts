import { NgModule } from '@angular/core';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { ManageOrdersComponent } from './components/manage-orders/manage-orders.component';
import { SharedModule } from 'shared/shared.module';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    ManageProductsComponent,
    ManageUsersComponent,
    ManageOrdersComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  providers:[
    AdminAuthGuardService
  ]
})
export class AdminModule { }
