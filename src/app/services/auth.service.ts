import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterUser } from '../models/UserInfo/RegisterUser';
import { LoginUser } from '../models/UserInfo/LoginUser';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Token } from '../models/UserInfo/Token';

const Url = 'https://localhost:44336';
const headers = {
  headers: new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('id_token')}`
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  UserInfo: Token;
  isLoggedIn = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) { }

  register(registerUser: RegisterUser): any {
    return this.http.post(`${Url}/api/Account/Register`, registerUser);
  }
  login(loginUser: LoginUser): any {
    const str = `grant_type=password&username=${encodeURI(loginUser.Username)}&password=${encodeURI(loginUser.Password)}`;
    return this.http.post(`${Url}/token`, str);
  }
  userInfo(): any {
    if (!localStorage.getItem('id_token')) { return new Observable(o => o.next(false)); }
    return this.http.get(`${Url}/api/Account/UserInfo`, headers);
  }
  logout() {
    localStorage.clear();
    this.isLoggedIn.next(false);
    this.http.post(`${Url}/api/Account/Logout`, headers);
    this.router.navigate(['/']);
  }
  IsLoggedIn(token: Token) {
    this.UserInfo = token;
    this.isLoggedIn.next(true);
  }
  GetMyProfile(): any {
    return this.http.get(`${Url}/api/Profile`, headers);
  }
  CreateProfile(token: any): any {
    return this.http.post(`${Url}/api/Profile`, null, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    });
  }
  UpdateProfile(profileInfo: any): any {
    return this.http.put(`${Url}/api/Profile`, profileInfo, headers);
  }
}
