import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // variable pour stocker le produit sélectionné
  selectedProduct: string = '';

  // tu peux ajouter d'autres méthodes si besoin, par exemple pour récupérer des données
  constructor() { }
}
