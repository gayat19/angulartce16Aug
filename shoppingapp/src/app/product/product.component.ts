import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
import { CartProduct } from '../models/cartproduct';

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
  constructor(private cartService:CartService) { 
    this.product = new  Product();
    this.qty = 0;
   
  }
  buy(){
    var cartProduct:CartProduct = new CartProduct(
              this.product.name,
              this.product.price,
              this.qty);
    this.cartService.addToCart(cartProduct);
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
