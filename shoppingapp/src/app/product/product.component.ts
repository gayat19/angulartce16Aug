import { Component, OnInit,Input } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product:Product;
  //products:Product[];
  numbers:number[];
  constructor() { 
    this.product = new  Product();
    this.numbers = [];
   
  }

  ngOnInit(): void {
  }

}
