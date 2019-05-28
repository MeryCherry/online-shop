import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/shared.module';

import { MainRoutingModule } from './main-routing.module';
import { RegularNavbarComponent } from './regular-navbar/regular-navbar.component';

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
  ]
})
export class MainModule { }
