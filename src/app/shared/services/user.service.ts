import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

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
}
