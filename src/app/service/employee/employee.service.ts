import { Injectable,Inject } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http'; 
import {EndPoint,apiEndPoint} from '../api/api.value';
import {ApiEndpoint} from '../api/Iapi';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeeService {
  // empList: Employee[] = [{
  //   id: 1,
  //   name: 'test',
  //   address: 'pune'
  // }, {
  //   id: 2,
  //   name: 'test1',
  //   address: 'mumbai'
  // }, {
  //   id: 3,
  //   name: 'test2',
  //   address: 'pune'
  // }];

  constructor(isValidUser:boolean,private http:HttpClient,@Inject(EndPoint) private apiEndPoint: ApiEndpoint) {
    console.log(isValidUser);
   }

  // getEmployees(): Employee[] {
  //   return this.empList;
  // }
  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiEndPoint.shoppingApiEndPoint+'/employee');
  }
  addEmployee(emp:Employee){
    return this.http.post(this.apiEndPoint.shoppingApiEndPoint+'/employee',emp);
  }
}
