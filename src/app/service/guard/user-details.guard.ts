import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Injectable()
export class UserDetailsGuard implements Resolve<User[]> {
    id: number;
    constructor(private _usertService: UserService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> | Promise<User[]> | User[] {
        this.id = +route.paramMap.get('id');
        return this._usertService.getUserById(this.id);
    }
}
