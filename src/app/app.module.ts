import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabase } from 'angularfire2/database';
import { environment } from 'environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { LoginComponent } from './login/login.component';
import { MainModule } from './main/main.module';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { SharedModule } from './shared/shared.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AdminModule } from './admin/admin.module';
import { ProductsFilterComponent } from './products-list/products-filter/products-filter.component';
import { ShippingDetailsFormComponent } from './shipping-details-form/shipping-details-form.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { OrderDetailsComponent } from './order-details/order-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsListComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderConfirmationComponent,
    OrderListComponent,
    ProductsFilterComponent,
    ShippingDetailsFormComponent,
    CartSummaryComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    MainModule,
    AdminModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
