import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  { path: '', component: ProductsListComponent },
  { path: '**', component: ProductsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
