import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../sharedmodule/shared.module';
import { CustomerComponent } from './customer.component';
import { AuthGuard } from '../service/guard/auth.guard';
import { ResolveDemo } from '../service/guard/resolve-demo.guard';

@NgModule({
    declarations: [CustomerComponent],
    imports: [SharedModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: '', component: CustomerComponent,
                canActivate: [AuthGuard],
                resolve: {
                    name: ResolveDemo
                },
            }
        ])
    ]
})
export class CustomerModule { }
