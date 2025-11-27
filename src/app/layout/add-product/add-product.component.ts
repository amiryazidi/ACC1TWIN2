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
constructor(private ps: ProductService, private route :Router) {}

  ngOnInit(): void {
    this.addProductForm = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl(0, Validators.required),
      description: new FormControl('', Validators.required),
      like: new FormControl(0),
      quantity: new FormControl(0, Validators.required),
      image: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
this.ps.addProduct(this.addProductForm.value).subscribe({
next: (data)=>{console.log("Product added successfully", data),
  this.route.navigate(['/product'])
} ,
  error: (error)=>console.log("Error adding product", error),
  
  complete: ()=>console.log("Add product operation completed")
  })
  }

}
