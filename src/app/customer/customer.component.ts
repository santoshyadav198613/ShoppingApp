import { Component, OnInit } from '@angular/core';
import { Customer } from '../service/customer/customer.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer = new Customer();
  constructor() { }

  ngOnInit() {
  }
  add(customer: Customer) {
    console.log(customer);
  }

}
