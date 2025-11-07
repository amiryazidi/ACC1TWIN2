import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Eventy } from '../../../model/eventy';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrl: './card-event.component.css'
})
export class CardEventComponent {
 @Input() e:Eventy;
   // Nouveau : contrôler l'affichage des boutons
  @Input() showButtons: boolean = true;
 // Event emitted when the user likes the event
 @Output ()notif=new EventEmitter<Eventy>()

 // Method to handle the like action
 likeEvent(e:Eventy){
   this.notif.emit(e);
 }
 addToFavorite(e:Eventy){
 }
}
