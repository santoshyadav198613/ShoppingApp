import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InrPipe } from '../common/inr.pipe';
import { HttpClientModule } from '@angular/common/http'
import { MdButtonModule,MdInputModule,MdDialogModule } from '@angular/material'

@NgModule({
    declarations: [InrPipe],
    imports: [CommonModule, MdButtonModule,MdInputModule,MdDialogModule],
    exports: [FormsModule, ReactiveFormsModule, InrPipe, HttpClientModule, MdButtonModule,MdInputModule,MdDialogModule]
})
export class SharedModule { }
