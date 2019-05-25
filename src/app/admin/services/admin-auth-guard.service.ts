import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { RolesService } from 'shared/services/roles.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AdminAuthGuardService implements CanActivate {

  constructor(private rolesSrvc: RolesService) { }

  canActivate(): Observable<boolean> {
    // getting app user from authentication service
    return this.rolesSrvc.isCurrentUserAdmin();
  }

}