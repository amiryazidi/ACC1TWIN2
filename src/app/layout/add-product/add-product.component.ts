import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { Product } from '../../model/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../shared/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']   // ✔️ corrigé
})
export class AddProductComponent {
addProductForm!: FormGroup;
id:number
product:Product
constructor(private ps: ProductService, private route :Router, private activatedRoute: ActivatedRoute) {}

 ngOnInit(): void {
    this.addProductForm = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl(0, Validators.required),
      description: new FormControl('', Validators.required),
      like: new FormControl(0),
      quantity: new FormControl(0, Validators.required),
      image: new FormControl('', Validators.required)
    });

    //1 - recuperation de l'id
    this.id = this.activatedRoute.snapshot.params['id'];

    if (this.id){
      //2 - appel au service pour recuperer le produit
      this.ps.getProductById(this.id).subscribe({
        next: (data)=> {
          //2- recuperation du produit
          this.product = data;
          //3- remplissage du formulaire
          this.addProductForm.patchValue(this.product);
        }
      })
    }
  }

  onSubmit() {
if (this.id){
  this.ps.updateProduct(this.addProductForm.value,this.id).subscribe({
next: (data)=>{
  console.log("Product updated successfully", data),
  this.route.navigate(['/product'])
} ,
  error: (error)=>console.log("Error updating product", error),
  complete: ()=>console.log("update product operation completed")
  })
}

this.ps.addProduct(this.addProductForm.value).subscribe({
next: (data)=>{console.log("Product added successfully", data),
  this.route.navigate(['/product'])
} ,
  error: (error)=>console.log("Error adding product", error),
  complete: ()=>console.log("Add product operation completed")
  })
  }

}
