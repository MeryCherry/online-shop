import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { map, switchMap } from 'rxjs/operators';
import { RolesService } from './roles.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  // to manage authorization for users, to get different roles
  save( user: firebase.User) {
    this.db.object('/users/' + user.uid ).update({
      email: user.email,
      name: user.displayName,
      id: user.uid
    });
  }
  // to get user from firebase database
  get( uid: string) {
    return this.db.object('/users/' + uid ).valueChanges();
  }

  getAll() {
    return this.db.list('/users' ).snapshotChanges().pipe(map(us => {
      return us.map(c => ({ id: c.payload.key, ...c.payload.val()}));
  }));
  }

  update(id, order) {
    return this.db.object('/users/' + id).update(order);
  }

   delete(orderId) {
    return this.db.object('/users/' + orderId).remove();
  }
}
