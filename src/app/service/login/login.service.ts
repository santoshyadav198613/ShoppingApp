import { Injectable } from '@angular/core';
import { Login } from './UserLogin';
@Injectable()
export class LoginService {
  isValidUser: boolean = false;

  constructor() { }

  login(user: Login) {
    if (user.userName === 'test' && user.password === 'test') {
      this.isValidUser = true;
      return true;
    }
    else
    { return false; }
  }
}
