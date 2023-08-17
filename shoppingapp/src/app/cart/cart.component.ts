import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartProduct } from '../models/cartproduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts:CartProduct[];
  constructor(private cartService:CartService) { 
      this.cartProducts = this.cartService.getCartDetails();
  }

  ngOnInit(): void {
  }

}
