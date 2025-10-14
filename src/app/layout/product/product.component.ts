import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent  {

  selectedProductType: string = '';
  constructor() {
  }



}
