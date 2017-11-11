import {ProductService} from '../product/product.service';
import {LoginService} from '../login/login.service';
import { HttpClient } from '@angular/common/http'; 
import {EndPoint,apiEndPoint} from '../api/api.value';
import { Inject } from '@angular/core';
import {ApiEndpoint} from '../api/Iapi';


export function productFactory(loginService: LoginService,http:HttpClient,endPoint:ApiEndpoint){
    return new ProductService(loginService.isValidUser,http,endPoint);
}
export let productServiceFactory ={
    provide: ProductService,
    useFactory: productFactory,
    deps:[LoginService,HttpClient,EndPoint]
}