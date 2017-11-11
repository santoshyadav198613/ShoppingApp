import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../sharedmodule/shared.module';
import { UserComponent } from './user.component';
import { UserdetailComponent } from './userdetail/userdetail.component';

import { UserService } from '../service/user/user.service';
import { AuthGuard } from '../service/guard/auth.guard';
import { ResolveDemo } from '../service/guard/resolve-demo.guard';

import { UserDetailsGuard } from '../service/guard/user-details.guard';


@NgModule({
    declarations: [
        UserComponent,
        UserdetailComponent],
    imports: [SharedModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: 'user', component: UserComponent,
                canActivate: [AuthGuard],
                children: [
                    {
                        path: ':id', component: UserdetailComponent,
                        resolve: {
                            userDetails : UserDetailsGuard
                        },
                        canActivateChild: [AuthGuard]
                    }
                ]
            }
        ])
    ],
    providers: [UserService, ResolveDemo, UserDetailsGuard]
})
export class UserModule { }
