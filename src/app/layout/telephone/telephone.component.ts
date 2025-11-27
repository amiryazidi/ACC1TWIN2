import { Component } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../shared/service/product.service';

@Component({
  selector: 'app-telephone',
  templateUrl: './telephone.component.html',
  styleUrls: ['./telephone.component.css']
})
export class TelephoneComponent {

  constructor(private ps : ProductService) { }

title: string;
  listProducts: Product[] = [];
  searchTerm: string = '';
  ngOnInit(){

    this.ps.getAllProduct().subscribe(
      (data) => {
        this.listProducts = data;
      }
    )
  }

  // implement buy method
  buy(p:Product){

    p.quantity--;
  }

  afterRecieveData(p:any){
    // p.quantity--
    let index = this.listProducts.indexOf(p)
    this.listProducts[index].quantity--
  }
}
