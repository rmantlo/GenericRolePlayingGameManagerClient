import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  IsLoggedIn: boolean;
  login: boolean = false;
  register: boolean = false;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    if (localStorage.getItem('id_token')) {
      this.IsLoggedIn = true;
    }
    else {
      this.IsLoggedIn = false;
    }
  }
  toggleLogin() {
    this.login = !this.login;
    this.register = false;
  }
  toggleRegister() {
    this.register = !this.register;
    this.login = false;
  }
  logOff(){
    this.auth.logout();
  }
}
