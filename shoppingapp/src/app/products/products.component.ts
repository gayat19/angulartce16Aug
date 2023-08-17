import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[];
  constructor() { 
    this.products = [
      new  Product(101,"Pencil",10,10,"./assets/images/Pencil.jpeg"),
      new  Product(102,"Pen",25,5,"./assets/images/Pencil.jpeg"),
      new  Product(103,"Eraser",7,10,"./assets/images/Pencil.jpeg")
    ];
  }

  ngOnInit(): void {
  }

}
