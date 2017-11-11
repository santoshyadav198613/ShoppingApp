import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../service/product/product';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  productId: string;
  productData: Product[];
  constructor(private _router: ActivatedRoute) { }

  ngOnInit() {
    this._router.data.subscribe((data) => this.productData = data['productDetails']);
  }

}
