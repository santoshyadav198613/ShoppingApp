import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';

@Injectable()
export class ProductDetailsGuard implements Resolve<Product[]> {
    id: number;
    constructor(private _productService: ProductService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> | Promise<Product[]> | Product[] {
        this.id = +route.paramMap.get('id');
        return this._productService.getProductById(this.id);
    }
}
