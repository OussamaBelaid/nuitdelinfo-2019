import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LOGIN_URL, REGISTER_URL } from '../../assets/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient) { }

  login(loginBody: {}) {
    return this.http.post(LOGIN_URL, loginBody);
  }

  register(registerBody: {}) {
    return this.http.post(REGISTER_URL, registerBody);
  }
}
