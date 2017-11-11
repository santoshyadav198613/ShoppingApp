import { Injectable, Inject } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { EndPoint, apiEndPoint } from '../api/api.value';
import { ApiEndpoint } from '../api/Iapi';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
  productList: Product[] = [
    { id: 1, imageUrl: 'https://cdn.pixabay.com/photo/2017/01/06/19/15/soap-bubble-1958650_960_720.jpg', name: 'test', price: 1000 },
    { id: 2, imageUrl: 'https://cdn.pixabay.com/photo/2017/01/06/19/15/soap-bubble-1958650_960_720.jpg', name: 'test', price: 2000 },
    { id: 3, imageUrl: 'https://cdn.pixabay.com/photo/2017/01/06/19/15/soap-bubble-1958650_960_720.jpg', name: 'test', price: 3000 }
  ];

  constructor(isValidUser: boolean, private http: HttpClient, @Inject(EndPoint) private apiEndPoint: ApiEndpoint) {
    console.log(isValidUser);
  }

  getProducts(): Observable<Product[]> {
    // return this.productList;
    return this.http.get<Product[]>(this.apiEndPoint.shoppingApiEndPoint + '/product');
  }

  getProductById(id: number): Product[] {
    return this.productList.filter((product) => product.id === id);
  }

  addProduct(product: Product) {
    return this.http.post(this.apiEndPoint.shoppingApiEndPoint + '/product', product);
  }

}
