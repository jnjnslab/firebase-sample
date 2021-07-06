import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-login01',
  templateUrl: './login01.component.html',
  styleUrls: ['./login01.component.css']
})
export class Login01Component implements OnInit {

  user: string = 'user1@example.com';
  pass: string = 'password1';

  constructor(public auth: AngularFireAuth) {}

  ngOnInit(): void {
  }

  login(): void {
    this.auth.signInWithEmailAndPassword(this.user, this.pass)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
        //let user1 = userCredential.user;
        //console.log(user1.email);
        alert('Success: ')
      })
      .catch((error) => {
        //var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  }

  logout() {
    this.auth.signOut();
  }

}
