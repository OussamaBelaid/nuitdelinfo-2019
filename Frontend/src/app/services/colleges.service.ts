import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GET_ALL_COLLEGE, GET_COLLEGE } from 'src/assets/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class CollegesService {

  constructor(private readonly http: HttpClient) { }

  fetchOne() {
    const headers = new HttpHeaders({
      'authorization': 'Bearer ' + localStorage.getItem('token')
    })
    return this.http.get(GET_COLLEGE, { headers });
  }

  fetchAll() {
    const headers = new HttpHeaders({
      'authorization': 'Bearer ' + localStorage.getItem('token')
    })
    return this.http.get(GET_ALL_COLLEGE, { headers });
  }
}
