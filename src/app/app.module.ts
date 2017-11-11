import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from '../app/routingmodule/routing.module';
import { EmployeeModule } from '../app/employee/employee.module';
import { SharedModule } from '../app/sharedmodule/shared.module';
import { UserModule } from '../app/user/user.module';

import { AppComponent } from './app.component';
import { LoginService } from '../app/service/login/login.service';

import { apiEndPoint, EndPoint } from '../app/service/api/api.value';
import { OrderComponent } from './order/order.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';

import { UserService } from "./service/user/user.service"

import { AuthGuard } from '../app/service/guard/auth.guard';
import { PostComponent } from './post/post.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './interceptor/api.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HoverDirective } from './directive//hover.directive';               


@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    PagenotfoundComponent,
    LoginComponent,
    PostComponent,
    HoverDirective,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    EmployeeModule,
    UserModule,
    RoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
  { provide: EndPoint, useValue: apiEndPoint }, LoginService, AuthGuard, UserService,
  { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor,multi:true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
