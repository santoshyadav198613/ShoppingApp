import { Injectable, Inject } from '@angular/core';
import { User } from './user';
import { ApiEndpoint } from '../api/Iapi';
import { EndPoint, apiEndPoint } from '../api/api.value';

@Injectable()
export class UserService {
  private userList: User[] = [{ userId: 1, name: 'test', address: 'test' }, {
    userId: 2, name: 'test1', address: 'test1'
  }, { userId: 3, name: 'test2', address: 'test2' }];

  constructor(@Inject(EndPoint) endPoint: ApiEndpoint) {
    console.log(endPoint);
  }

  getUser(): User[] {
    return this.userList;
  }

 getUserById(id: number): User[] {
   console.log(id);
   console.log(this.userList.filter((user) => user.userId === id));
    return this.userList.filter((user) => user.userId === id);
  }
}
