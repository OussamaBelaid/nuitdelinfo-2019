import { Component, OnInit } from '@angular/core';
import { AccomodationsService } from 'src/app/services/accomodations.service';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.scss']
})
export class AccommodationComponent implements OnInit {

  accomodations = [
    { name: 'Name 1', description: 'accomodation description 1 .........' },
    { name: 'Name 1', description: 'accomodation description 1 .........' },
    { name: 'Name 1', description: 'accomodation description 1 .........' },
    { name: 'Name 1', description: 'accomodation description 1 .........' },
    { name: 'Name 1', description: 'accomodation description 1 .........' },
    { name: 'Name 1', description: 'accomodation description 1 .........' }];

  constructor(private readonly accomodationsService: AccomodationsService) { }

  ngOnInit() {
    this.fetchAllAccommodations();
  }

  fetchAllAccommodations() {
    // this.accomodationsService.fetchAll().subscribe(
    //   (response: any) => {
    //     this.accomodations = response;
    //   } error => { }
    // )
  }

}
