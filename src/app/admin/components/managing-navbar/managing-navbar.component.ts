import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { RolesService } from 'shared/services/roles.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'managing-navbar',
  templateUrl: './managing-navbar.component.html',
  styleUrls: ['./managing-navbar.component.scss']
})
export class ManagingNavbarComponent implements OnInit, OnDestroy {

  isAdmin: boolean;
  subscription: Subscription;

  constructor(private rolesSrvc: RolesService) { }

   ngOnInit() {
   this.subscription = this.rolesSrvc.isCurrentUserAdmin().subscribe( res =>
      this.isAdmin = res);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
