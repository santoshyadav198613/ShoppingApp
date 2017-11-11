import { Injectable } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs';

@Injectable()
export class PasswordValidatorService {

  constructor() { }

}



export function PasswordValidator(control: FormControl): Observable <any>{
  if(control.value.length<=4 || control.value.length>=0){
    let result = {paaswordValid: true};
    return Observable.of(result);
  }else{
    let result = {paaswordValid: false};
    return Observable.of(result);
  }
}
