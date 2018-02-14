import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

export interface LoginState {
  isLogin: boolean;
  isCheck: boolean;
}

@Injectable()
export class LoginStateService {
  private sub = new Subject<LoginState>();

  getLoginState(): Observable<LoginState> {
    return this.sub.asObservable();
  }

  changeLoginState(newState: LoginState) {
    this.sub.next(newState);
  }
}
