import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private db: AngularFireDatabase, private auth: AuthService) { }

isCurrentUserAdmin(){
  return this.auth.apiUser$.pipe(
    // mapping the result, so user object to boolean
    switchMap((appUser: any) => { console.log(appUser.uid); return this.isAdmin(appUser.uid)})
  )
}
  isAdmin(uid: string): Observable<boolean> {
    console.log(uid);
    console.log('wewnatrz');
  return this.db.object('/roles/admins/' + uid ).valueChanges().pipe(map( user => {
    if (user) {
      console.log(user)
      return true;
    }
    return false;
  }
  ));
  }
}
