import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Participation } from '../../../model/Participation';

@Component({
  selector: 'app-participation-form',
  templateUrl: './participation-form.component.html',
  styleUrls: ['./participation-form.component.css']
})
export class ParticipationFormComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }
  eventId!: number;
  eventPrice!: number;
  totalPrice = 0;

  participation: Participation = new Participation(1, 0, '', 0, 'pending');
  participations: Participation[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.eventId = +this.route.snapshot.paramMap.get('id')!;
    this.eventPrice = +this.route.snapshot.paramMap.get('price')!;
    this.participation.eventId = this.eventId;
  }

  calculateTotalPrice() {
    if (this.participation.nbPlaces > 0) {
      this.totalPrice = this.participation.nbPlaces * this.eventPrice;
    } else {
      this.totalPrice = 0;
    }
  }

  onSubmit(form: any) {
   console.log(this.totalPrice)
   console.log(this.participation.nbPlaces)


  }

}
