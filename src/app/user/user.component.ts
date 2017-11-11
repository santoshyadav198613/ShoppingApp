import { Component, OnInit, ViewChild, ViewChildren, QueryList, DoCheck } from '@angular/core';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { UserService } from '../service/user/user.service';
import { User } from '../service/user/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit, DoCheck {
  name: string;
  userList: User[];
  toggleTable = true;

  title = 'Hello world!';
  constructor(private _userService: UserService) { }


  ngOnInit() {
    this.name = 'test';
    this.userList = this._userService.getUser();
  }

  ngDoCheck() {
    let data = this.name;
  }

  updateName() {
    this.name = 'new name';
  }


  toggleVisible(isVisible: boolean) {
    this.toggleTable = isVisible;
  }

  changeTitle() {
    this.title = 'hello universe';
  }

  addUser() {
    let user = { userId: 4, name: 'test4', address: 'test4' };
    this.userList = [user];
  }

}
