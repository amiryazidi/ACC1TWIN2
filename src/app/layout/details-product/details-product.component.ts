import { Component } from '@angular/core';
import { ProductService } from '../../shared/service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../model/product';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent {
  id :number
  product:Product
  constructor(private ps :ProductService, private Act:ActivatedRoute){}

  ngOnInit(){
    this.id=this.Act.snapshot.params['id'];
    this.ps.getProductById(this.id).subscribe(
      (data)=>{
       this.product=data;
      }
    )
  }
}
