import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map, switchMap } from 'rxjs/operators';

import { User } from './../models/user';
import { AuthService } from './auth.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private db: AngularFireDatabase, private auth: AuthService) { }

isCurrentUserAdmin() {
  if (!this.auth.apiUser$) {
    return;
  }
  return this.auth.apiUser$.pipe(
    // mapping the result, so user object to boolean
    switchMap((appUser: User) =>  {
      if (appUser) {
        return this.isAdmin(appUser.id);
      }
      return of(null);
    }));
}
  private isAdmin(uid: string) {
    return this.db.object('/roles/admins/' + uid ).snapshotChanges().pipe(map( u => u.payload.val() === true));
  }
}
