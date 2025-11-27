import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../shared/service/product.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent {

constructor(private ps : ProductService){}
 @Input() p: Product;

 //1-  preparer la notification à envoyer aux parent
@Output() notificationAcheter = new EventEmitter()


//2- envoyer la notification suite clique
sendDataToParent(p:Product){
  this.notificationAcheter.emit(p)
}
supprimer(id:number){
  this.ps.deleteProduct(id).subscribe(
    ()=>{console.log("productdelete"),
      window.location.reload()
    }
)

}

}
