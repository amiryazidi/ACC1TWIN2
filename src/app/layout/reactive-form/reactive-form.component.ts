import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  formLogin= new FormGroup({
    lg : new FormControl('' , [Validators.required, Validators.minLength(4)]),
    password : new FormControl('' , [Validators.required,Validators.pattern('[a-zA-Z0-9]*'),Validators.minLength(6)]),
    email :  new FormControl('' , [Validators.required, Validators.email]),
    age: new FormControl('' , [Validators.required, Validators.min(0)]),
    cin: new FormControl('' , Validators.required),

  })
}
