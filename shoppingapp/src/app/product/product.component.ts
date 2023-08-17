import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product:Product;
  @Output() buyProduct = new EventEmitter<number>();
  //products:Product[];
  qty:number;
  constructor() { 
    this.product = new  Product();
    this.qty = 0;
   
  }
  buy(){
    
    this.buyProduct.emit(this.qty*this.product.price);
  }

  increment(){
    if(this.qty<this.product.quantity)
      this.qty++;
    else
      alert("We know you have money. Please choose another product")
  }
  decrement(){
    if(this.qty>0)
      this.qty--;
    else
      alert("Open your eyes and see. It 0 already!!!")
  }
  ngOnInit(): void {
  }

}
