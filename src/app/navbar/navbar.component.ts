import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = undefined;
        //this.router.navigate(['/login']);
      }
    });
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
  }


}
