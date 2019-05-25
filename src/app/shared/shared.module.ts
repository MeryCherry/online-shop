import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
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
    CarouselComponent
  ],
  providers: [
    UserService,
    AuthService
  ]
})
export class SharedModule { }
