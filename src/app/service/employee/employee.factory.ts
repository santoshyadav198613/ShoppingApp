import {EmployeeService} from './employee.service';
import {LoginService} from '../login/login.service';
import { HttpClient } from '@angular/common/http'; 
import {EndPoint,apiEndPoint} from '../api/api.value';
import { Inject } from '@angular/core';
import {ApiEndpoint} from '../api/Iapi'

export function EmployeeFactory(loginService: LoginService,http:HttpClient,endPoint:ApiEndpoint){
    return new EmployeeService(loginService.isValidUser,http,endPoint);

}

export let employeeServiceFactory ={
    provide : EmployeeService,
    useFactory:EmployeeFactory,
    deps: [LoginService,HttpClient,EndPoint]
}