import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/shared.module';

import { MainRoutingModule } from './main-routing.module';
import { RegularNavbarComponent } from './regular-navbar/regular-navbar.component';
import { AdminAuthGuardService as AdminGuard } from 'app/admin/services/admin-auth-guard.service';
@NgModule({
  declarations: [
    RegularNavbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule
  ],
  exports: [
    RegularNavbarComponent
  ],
  providers: [
    AdminGuard
  ]
})
export class MainModule { }
