import { Component, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuardComponent implements CanActivate {
  user: firebase.User;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        console.log('AuthStateChanged: user is logged in');
        this.user = user;
      } else {
        console.log('AuthStateChanged: user is logged out');
        this.user = undefined;
      }
    });
  }

  canActivate() {
    if (this.user) {
      console.log('CanActivate: user logged in');
      return true;
    }
    console.log('CanActivate: user NOT logged in');
    this.router.navigate(['/login']);
    return false;
  }

}
