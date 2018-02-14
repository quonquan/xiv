import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

export interface User {
  token: string;
  email: string;
  photoURL: string;
}

@Injectable()
export class UserService {
  private user: User;

  setUser(user: User) {
    this.user = user;
  }

  getUser(): Observable<User> {
    return of(this.user);
  }
}
