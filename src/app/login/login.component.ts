import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login/login.service';
import { Login } from '../service/login/UserLogin';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  user = new Login();
  constructor(private loginSevice: LoginService
    , private _router: Router) { }

  ngOnInit() {
  }

  login() {
    let result = this.loginSevice.login(this.user);
    if (result) {
      this._router.navigate(['/employee']);
    }
    else {
      this.errorMessage = 'UserName or Password in not valid!';
    }
  }
}
