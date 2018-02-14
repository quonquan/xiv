import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

import { FirebaseService } from '../shared/firebase_service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private $firebaseService: FirebaseService) {}

  ngOnInit() {}

  loginWithGoogle() {
    this.$firebaseService.getFirebaseApp().subscribe(app => {
      firebase.auth().languageCode = 'ja';
      const googleProvider = new firebase.auth.GoogleAuthProvider();
      googleProvider.setCustomParameters({
        login_hint: 'user@example.com'
      });
      firebase
        .auth(app)
        .signInWithPopup(googleProvider)
        .then(ret => {
          window.location.reload();
        })
        .catch(err => {
          alert('ログインに失敗しました');
        });
    });
  }
}
