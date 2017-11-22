import { Component } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  users: Observable<any[]>;
  itemRef;
  dbKey;
  uid;
  userInfo;
  temp;
  firstNameRef;
  lastNameRef;
  emailRef;
  firstName = '';
  lastName = '';
  email = '';
  model: {} = {firstName: '', lastName: '', email: '' };


  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase) {
    this.uid = afAuth.auth.currentUser.uid;
    this.itemRef = db.list('users');
    this.users = this.itemRef.valueChanges();

    this.firstNameRef = db.database.ref('/users/' + this.uid + '/firstName');
    this.firstNameRef.on('value', snapshot => {
      console.log(snapshot.val());
      this.firstName = snapshot.val();
    });

    this.lastNameRef = db.database.ref('/users/' + this.uid + '/lastName');
    this.lastNameRef.on('value', snapshot => {
      console.log(snapshot.val());
      this.lastName = snapshot.val();
    });

    this.emailRef = db.database.ref('/users/' + this.uid + '/email');
    this.emailRef.on('value', snapshot => {
      console.log(snapshot.val());
      this.email = snapshot.val();
    });


    //console.log('firstName: ' + this.firstName);
    console.log('uid: ' + this.uid);

  }

  updateProfile() {
    let update = {};
    update['/users/' + this.dbKey] = this.model;
    //this.db.database.ref().update(update);
    this.db.database.ref().child('users').child(this.uid).update(this.model);

    //this.itemRef.child(this.uid).setValue(this.model);
    //this.itemRef.push(this.model);
    this.model = {};
  }


}
