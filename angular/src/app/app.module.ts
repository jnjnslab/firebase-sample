import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {environment} from '../environments/environment';

import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule, BUCKET} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireFunctionsModule} from '@angular/fire/functions';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Store01Component } from './store01/store01.component';
import { Login01Component } from './login01/login01.component';
import { Storage01Component } from './storage01/storage01.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Store01Component,
    Login01Component,
    Storage01Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule
  ],
  providers: [{ provide: BUCKET, useValue: 'fir-course-fb752.appspot.com' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
