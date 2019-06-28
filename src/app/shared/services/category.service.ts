import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map, mergeMap, take, switchMap } from 'rxjs/operators';
import { Observable, forkJoin, observable, of  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getAll() : Observable<any[]> {
    return this.db.list('/categories').snapshotChanges().pipe(
     map((categ) => {
    return categ.map(c => ({ key: c.payload.key, name: c.payload.val()['name'], types: c.payload.val()['types']}));
  }));
  }
}
