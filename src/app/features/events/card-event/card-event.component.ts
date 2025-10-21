import { Component, Input } from '@angular/core';
import { Eventy } from '../../../model/eventy';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrl: './card-event.component.css'
})
export class CardEventComponent {
@Input()  e:Eventy
@Input() showButtons: boolean = true;
}
