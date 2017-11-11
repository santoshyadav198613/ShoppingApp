import { Component, OnInit } from '@angular/core';
import { LoginService } from './service/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  isValidUser: boolean;

  constructor(public _login: LoginService) {

  }

  ngOnInit() {
    this.isValidUser = this._login.isValidUser;
    console.log(this.isValidUser);
  }


}
