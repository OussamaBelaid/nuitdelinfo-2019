import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GET_ALL_EVENTS } from 'src/assets/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private readonly http: HttpClient) { }

  fetchAll() {
    const headers = new HttpHeaders({
      'authorization': 'Bearer ' + localStorage.getItem('token')
    })
    return this.http.get(GET_ALL_EVENTS, { headers });
  }
}
