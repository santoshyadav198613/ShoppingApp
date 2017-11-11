import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this._fb.group({
      customerName: ['', Validators.required],
      orderDate: ['', Validators.required],
      orderId: [''],
      address: this._fb.group({
        addressLine1: ['', Validators.required],
        addressLine2: [''],
        city: ['', Validators.required],
        pin: ['', Validators.required]
      }),
      amount: [''],
      email: ['', Validators.required],
      cardDetails: this._fb.array([this.buildForm()])
    });
  }

  buildForm() {
    return this._fb.group({
      cardNumber: ['', Validators.required],
      expiryMonth: ['', Validators.required],
      expiryYear: ['', Validators.required],
      cvv: ['', Validators.required]
    });
  }

  addCard() {
    const cardControl = <FormArray>this.orderForm.controls['cardDetails'];
    cardControl.push(this.buildForm());
  }

  removeCard(i: number) {
    const cardControl = <FormArray>this.orderForm.controls['cardDetails'];
    cardControl.removeAt(i);
  }
  addOrder(value: any) {
    console.log(value);
  }
}
