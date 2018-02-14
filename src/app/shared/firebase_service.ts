import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import * as firebase from 'firebase';

import { environment } from '../../environments/environment';

@Injectable()
export class FirebaseService {
  private firebaseApp;

  constructor() {
    this.firebaseApp = firebase.initializeApp(environment.firebaseConfig);
  }

  getFirebaseApp(): Observable<firebase.app.App> {
    return of(this.firebaseApp);
  }
}
