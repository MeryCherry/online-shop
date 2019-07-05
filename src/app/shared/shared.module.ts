import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbActiveModal, NgbModal, NgbModalConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MatComponentsModule } from 'app/mat-components/mat-components.module';
import { CustomFormsModule } from 'ng2-validation';

import { AdminAuthGuardService as AdminGuard } from '../admin/services/admin-auth-guard.service';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CartItemsQuantityComponent } from './components/cart-items-quantity/cart-items-quantity.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service';
import { OrderService } from './services/order.service';
import { ProductsService } from './services/products.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    CarouselComponent,
    ProductCardComponent,
    ConfirmModalComponent,
    CartItemsQuantityComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    MatComponentsModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  exports: [
    CommonModule,
    AngularFireAuthModule,
    FormsModule,
    CustomFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatComponentsModule,
    CarouselComponent,
    ProductCardComponent,
    CartItemsQuantityComponent,
    ConfirmModalComponent
  ],
  providers: [
    UserService,
    AuthService,
    ProductsService,
    CartService,
    OrderService,
    AdminGuard,
    NgbModalConfig,
    NgbModal,
    NgbActiveModal
  ]
})
export class SharedModule { }
