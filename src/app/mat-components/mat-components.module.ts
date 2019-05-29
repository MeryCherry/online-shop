import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatTableModule, MatSortModule, MatPaginatorModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class MatComponentsModule { }
