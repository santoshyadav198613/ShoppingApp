import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { OrderComponent } from '../order/order.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { LoginComponent } from '../login/login.component';
import { ProductModule } from '../product/product.module';
import { CustomerModule } from '../customer/customer.module';
import { PostComponent } from '../post/post.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'order', component: OrderComponent },
      { path: 'product', loadChildren: '../product/product.module#ProductModule', data: { preload: true } },
      { path: 'customer', loadChildren: '../customer/customer.module#CustomerModule' },
      { path: 'post', component: PostComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', component: PagenotfoundComponent }
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
