import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/shared.module';

import { MainRoutingModule } from './main-routing.module';
import { ManagingNavbarComponent } from './managing-navbar/managing-navbar.component';
import { RegularNavbarComponent } from './regular-navbar/regular-navbar.component';

@NgModule({
  declarations: [
    RegularNavbarComponent,
    ManagingNavbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule
  ],
  exports: [
    RegularNavbarComponent,
    ManagingNavbarComponent
  ]
})
export class MainModule { }
