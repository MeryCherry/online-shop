import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegularNavbarComponent } from './regular-navbar/regular-navbar.component';
import { ManagingNavbarComponent } from './managing-navbar/managing-navbar.component';
import { MainRoutingModule } from './main-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';

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
