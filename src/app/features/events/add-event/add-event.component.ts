import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { futurDateValidator } from '../../../shared/Validators/futur-date.validator';
import { Router } from '@angular/router';
import { EventsService } from '../../../shared/service/events.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {

  constructor(private eventService: EventsService, private rt:Router) { }
  eventForm = new FormGroup({
  title: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z]*')]),
  description: new FormControl('', [Validators.required, Validators.minLength(10)]),
  date: new FormControl('', [Validators.required, futurDateValidator(7)]),
  price: new FormControl('', [Validators.required, Validators.pattern('^\\d+(\\.\\d+)?$')]),
  nbPlaces: new FormControl('', [Validators.required, Validators.pattern('^[1-9][0-9]?$|^100$')]),
  lieu : new FormControl('', [Validators.required, Validators.minLength(5)]),
  image: new FormControl(''),
  domaines: new FormArray([new FormControl('')]),
    // ✅ FormGroup imbriqué pour l’adresse détaillée
  detailedAddress: new FormGroup({
    street: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    governorate: new FormControl('', Validators.required),
    zipcode: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{4}$') // Code postal tunisien à 4 chiffres
    ])
  })

});

get domaines() {
  return this.eventForm.get('domaines') as FormArray;
}

addDomain() {
  this.domaines.push(new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]));
}

save(){
  console.log(this.eventForm.value);
  
  // TODO: Implement the save logic (e.g., send the data to the server)
  this.eventService.addEvent(this.eventForm.value);
  this.rt.navigate(['/events']);
}
}
