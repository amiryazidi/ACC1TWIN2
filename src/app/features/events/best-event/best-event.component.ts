import { Component, Input } from '@angular/core';
import { Eventy } from '../../../model/eventy';

@Component({
  selector: 'app-best-event',
  templateUrl: './best-event.component.html',
  styleUrls: ['./best-event.component.css']
})
export class BestEventComponent {
@Input() events:Eventy[]=[];
}
