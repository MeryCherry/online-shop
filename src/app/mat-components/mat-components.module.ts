import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatTableModule, MatSortModule, MatPaginatorModule,
   MatIconModule, MatButtonModule, MatBadgeModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatInputModule
  ]
})
export class MatComponentsModule { }
