import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import * as firebase from 'firebase';
import 'firebase/firestore';

import { environment } from '../../environments/environment';

@Injectable()
export class FirebaseService {
  private firebaseApp: firebase.app.App;
  private db: firebase.firestore.Firestore;

  constructor() {
    this.firebaseApp = firebase.initializeApp(environment.firebaseConfig);
    this.db = firebase.firestore(this.firebaseApp);
  }

  getFirebaseApp(): firebase.app.App {
    return this.firebaseApp;
  }

  getFireStore(): firebase.firestore.Firestore {
    return this.db;
  }
}
