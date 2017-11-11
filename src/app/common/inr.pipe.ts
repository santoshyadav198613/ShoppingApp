import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../service/product/product';
@Pipe({
  name: 'inr'
})
export class InrPipe implements PipeTransform {

  transform(value: Product[], args?: number): any {
    console.log(args);
    console.dir(value);
  //  return value;
 //   return 'Rs. ' + value;
return value.filter((data) => data.price > args );

  }
}
