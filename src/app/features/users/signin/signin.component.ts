import { Component } from '@angular/core';
import { AuthService } from '../../../shared/service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginRequest } from '../../../model/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
// Données du formulaire de connexion
loginData: LoginRequest = {
  email: '',
  password: ''
};

// Message d'erreur à afficher
errorMessage: string = '';

// Indicateur de chargement
isLoading: boolean = false;
 loginForm: FormGroup;
  errorMsg = '';
// Injection des services via le constructeur (plus simple pour les débutants)
constructor(
      private fb: FormBuilder,
  private auth: AuthService,
  private router: Router,
  private route: ActivatedRoute
) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
}

//methode lem3alem



  login() {
    if (this.loginForm.invalid) {
      return;
    }

    this.auth.login(this.loginForm.value).subscribe({
      next: (res) => {
        // save token + role
        this.auth.saveAuth(res.accessToken, res.user?.role);
        this.router.navigate(['/product']);
      },
      error: () => {
        this.errorMsg = 'Invalid email or password';
      }
    });
  }
}
