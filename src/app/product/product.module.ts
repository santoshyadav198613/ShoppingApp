import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../sharedmodule/shared.module';
import { ProductComponent } from './product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

import { ProductService } from '../service/product/product.service';
import { AuthGuard } from '../service/guard/auth.guard';
import { ResolveDemo } from '../service/guard/resolve-demo.guard';

import { ProductDetailsGuard } from '../service/guard/product-details.guard';
import { ProductEditComponent } from './product-edit/product-edit.component';

import {productServiceFactory} from '../service/product/product.factory'


@NgModule({
    declarations: [ProductComponent,
        ProductlistComponent,
        ProductdetailsComponent,
        ProductEditComponent],
    imports: [SharedModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: '', component: ProductComponent,
                canActivate: [AuthGuard],
                resolve: {
                    name: ResolveDemo
                },
                children: [
                    {
                        path: ':id', component: ProductdetailsComponent,
                        resolve: {
                            productDetails: ProductDetailsGuard
                        },
                        canActivateChild: [AuthGuard]
                    }
                ]
            }
        ])
    ],
    providers: [productServiceFactory, ResolveDemo, ProductDetailsGuard],
    entryComponents:[ProductEditComponent]
})
export class ProductModule { }
