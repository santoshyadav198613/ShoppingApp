import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../sharedmodule/shared.module';
import { EmployeeComponent } from './employee.component';
import {employeeServiceFactory} from '../service/employee/employee.factory'

@NgModule({
    declarations: [EmployeeComponent],
    imports: [SharedModule,
        CommonModule,
        RouterModule.forChild([
            { path: 'employee', component: EmployeeComponent }
        ])
    ],
    providers: [employeeServiceFactory]
})
export class EmployeeModule { }
