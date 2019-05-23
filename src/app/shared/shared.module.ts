import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    AngularFireAuthModule,
    NgbModule
  ],
  exports: [
    CommonModule,
    AngularFireAuthModule,
    CarouselComponent
  ]
})
export class SharedModule { }
