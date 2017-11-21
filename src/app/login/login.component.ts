import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
    validLoginAttempt: boolean = true;
    user;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.auth.onAuthStateChanged(user => {
      if(user) {
        console.log('LoginComponent: AuthStateChanged: User logged in');
        this.user = user;
      } else {
        console.log('LoginComponent: AuthStateChanged: User logged out');
        this.user = undefined;
      }
    });

  }

  login(email: HTMLInputElement, password: HTMLInputElement) {
    this.afAuth
      .auth
      .signInWithCredential(firebase.auth.EmailAuthProvider.credential(email.value, password.value))
      .then(value => {
        console.log('LoginComponent: login: Successfully logged in');
        this.router.navigate(['/home']);
      })
      .catch(err => {
        this.failedLoginAttempt();
      });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  private failedLoginAttempt() {
    this.validLoginAttempt = !this.validLoginAttempt;
  }

}
