import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

import { FirebaseService } from './shared/firebase_service';
import { LoginStateService, LoginState } from './shared/login_state_service';
import { UserService, User } from './shared/user_service';

@Component({
  selector: 'app-xiv',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLogin = false;
  isCheck = true;

  constructor(
    private $firebaseService: FirebaseService,
    private $loginStateService: LoginStateService,
    private $userService: UserService
  ) {
    const app = this.$firebaseService.getFirebaseApp();
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$loginStateService.changeLoginState(<LoginState>{
          isLogin: true,
          isCheck: false
        });
        this.$userService.setUser(<User>{
          token: user.refreshToken,
          email: user.email,
          photoURL: user.photoURL
        });
        return;
      }
      this.$loginStateService.changeLoginState(<LoginState>{
        isLogin: false,
        isCheck: false
      });
    });
  }

  ngOnInit() {
    this.$loginStateService.getLoginState().subscribe(state => {
      this.isCheck = state.isCheck;
      this.isLogin = state.isLogin;
    });
  }
}
