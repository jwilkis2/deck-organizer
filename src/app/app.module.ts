import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { MessageLeftComponent } from './message-left/message-left.component';
import { MessageRightComponent } from './message-right/message-right.component';

import { GoogleAnalyticsEventsService } from './services/google-analytics-events-service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule} from 'angularfire2/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyB19-VZcRZHkwqHblYdeokpTycfRIsvKzg",
  authDomain: "deck-organizer.firebaseapp.com",
  databaseURL: "https://deck-organizer.firebaseio.com",
  projectId: "deck-organizer",
  storageBucket: "deck-organizer.appspot.com",
  messagingSenderId: "809205466684"
};

import {
  RouterModule,
  Routes
} from '@angular/router';
import { TwoButtonComponent } from './two-button/two-button.component';
import { AuthGuardComponent } from './auth-guard/auth-guard.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardComponent] },
  { path: 'login', component: LoginComponent },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuardComponent] },
  { path: 'chatbox', component: ChatboxComponent, canActivate: [AuthGuardComponent] },
  { path: '**', component: HomeComponent, canActivate: [AuthGuardComponent] }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SettingsComponent,
    NavbarComponent,
    ChatboxComponent,
    MessageLeftComponent,
    MessageRightComponent,
    TwoButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [GoogleAnalyticsEventsService, AuthGuardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
