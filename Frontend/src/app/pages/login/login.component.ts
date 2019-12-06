import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginBody: {};

  constructor(
    private readonly authService: AuthService
  ) { }

  ngOnInit() {
  }

  login() {
    // this.authService.login(loginBody).subscribe(
    //   (response: any) => {
    // localStorage.setItem('token', response.token)
    //   } error => {}
    // )
  }
}
