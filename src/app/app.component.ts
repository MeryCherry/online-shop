import { User } from './shared/models/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  apiUser: User;
  constructor(private auth: AuthService, private router: Router) {
  }

   ngOnInit() {
    this.auth.apiUser$.subscribe(user => { this.apiUser = user;  } );
   }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

}
