import { CartService } from './cart.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class OrderService {

    constructor(private db: AngularFireDatabase, private cartSrvc: CartService, private authService: AuthService ) { }

    getAll() {
        // we use snapshotchanges to map list and get also
        // key parameter otherwise we would use commented line
        const productRef = this.db.list('/orders', ref => ref.orderByChild('datePlaced'));
        return productRef.snapshotChanges().pipe(map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val()}));
        }));
       // return this.db.list('/orders').valueChanges();
    }

    async create(order) {
        let result = await this.db.list('/orders').push(order);
        this.cartSrvc.clearCartItems();
        return result;
    }
    
    getByUserID(userId: string) {
         const ordersRef = this.db.list('/orders', ref => ref.orderByChild('userID').equalTo(userId));
         return ordersRef.snapshotChanges().pipe(map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val()}));
        }));
    }
    getCurrentUserOrderList()
    {
        return this.authService.user$.pipe
        (switchMap(
          user => {
          if (user) {
            return this.getByUserID(user.uid);
          }
          return of(null);
        }));
    }
    
    getByID(id: string) {
        return this.db.object('/orders/' + id).snapshotChanges().pipe(map(o => {
            return { key: o.payload.key, ...o.payload.val()};
        }));
   }

   update(id, order) {
    return this.db.object('/orders/' + id).update(order);
  }

   delete(orderId) {
    return this.db.object('/orders/' + orderId).remove();
  }
}