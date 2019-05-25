import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'shared/models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'regular-navbar',
  templateUrl: './regular-navbar.component.html',
  styleUrls: ['./regular-navbar.component.scss']
})
export class RegularNavbarComponent implements OnInit {

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
