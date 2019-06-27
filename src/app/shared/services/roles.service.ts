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

  getListAdmins() {
    return this.db.list('/roles/admins' ).snapshotChanges().pipe(map(r => {
      return r.map(c => ({ id: c.payload.key, ...c.payload.val()}));
  }));
  }

  updateRoleAdmin(id, role) {
    return this.db.object('/roles/admins' + id).update(role);
  }

  async AddAdmin(id: string) {
    let result = await this.db.list('/roles/admins').push({id : true});
    return result;
}
deleteAdmin(orderId) {
  return this.db.object('/roles/admins' + orderId).remove();
}
}
