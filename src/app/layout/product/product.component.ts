import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  title: string;
  listProducts: Product[] = [];
  searchTerm: string = '';
  constructor() {
  }

  ngOnInit(){
        this.title = 'Product Page';
        this.listProducts = [
          {id: 1, name: 'Product A', price: 100, description: 'Description of Product A',like:0 , quantity:0},
          {id: 2, name: 'Product B', price: 200, description: 'Description of Product B',like:3 , quantity:10},
          {id: 3, name: 'Product C', price: 300, description: 'Description of Product C',like:0 , quantity:5}
        ]
  }

  // implement buy method
  buy(p:Product){

    p.quantity--;
  }

}
