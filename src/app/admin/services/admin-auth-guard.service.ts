import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { RolesService } from 'shared/services/roles.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AdminAuthGuardService implements CanActivate {

  constructor(private rolesSrvc: RolesService, private router: Router) { }

  canActivate(route, state: RouterStateSnapshot): Observable<boolean> {
    // getting app user from authentication service
    return this.rolesSrvc.isCurrentUserAdmin().pipe(map(
      isAdmin => {
        if (isAdmin) { return true;
        }
        this.router.navigate(['/']);
        return false;
      })
    );
  }

}