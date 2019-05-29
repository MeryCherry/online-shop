import { ProductsService } from './services/products.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

@NgModule({
  declarations: [
    CarouselComponent,
    ProductCardComponent,
    ConfirmModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatComponentsModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  exports: [
    CommonModule,
    AngularFireAuthModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatComponentsModule,
    CarouselComponent,
    ProductCardComponent,
    ConfirmModalComponent
  ],
  providers: [
    UserService,
    AuthService,
    ProductsService,
    AdminGuard,
    NgbModalConfig,
    NgbModal,
    NgbActiveModal
  ]
})
export class SharedModule { }
