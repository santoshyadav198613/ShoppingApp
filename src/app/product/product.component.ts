import { Component, OnInit } from '@angular/core';
import { Product } from '../service/product/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product/product.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product = new Product();
  constructor(private _route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    //this._route.data.subscribe((data) => console.log(data['name']));
  }
  add() {
    this.productService.addProduct(this.product).subscribe((data) => {
      console.log(data);
      //  this.loadData();
      this.product = new Product();
    });
    //  console.log(this.product);
  }
}
