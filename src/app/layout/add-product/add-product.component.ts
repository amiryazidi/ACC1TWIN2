import { Component } from '@angular/core';
import { Product } from '../../model/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']   // ✔️ corrigé
})
export class AddProductComponent {
addProductForm!: FormGroup;


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

  }

}
