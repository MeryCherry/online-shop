import { CartService } from './services/cart.service';
import { ProductsService } from './services/products.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomFormsModule } from 'ng2-validation';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminAuthGuardService as AdminGuard } from '../admin/services/admin-auth-guard.service';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { MatComponentsModule } from 'app/mat-components/mat-components.module';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CartItemsQuantityComponent } from './components/cart-items-quantity/cart-items-quantity.component';
import { OrderService } from './services/order.service';

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
