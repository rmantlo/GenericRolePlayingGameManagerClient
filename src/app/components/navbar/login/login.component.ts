import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Token } from '../../../models/UserInfo/Token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginGroup: FormGroup;
  loginError: string;
  constructor(private auth: AuthService, private builder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.createLogin();
  }
  @Output() onLoginToggle = new EventEmitter<any>();
  createLogin() {
    this.loginGroup = this.builder.group({
      Username: new FormControl(),
      Password: new FormControl()
    })
  }
  onSubmit() {
    this.auth.login(this.loginGroup.value)
      .subscribe((token: Token) => {
        this.auth.IsLoggedIn(token);
        localStorage.setItem('id_token', token.access_token);
        this.router.navigate(['/']);
      },
        (error) => {
          let errHandle: string = error.error.error_description;
          console.log(errHandle)
          this.loginError = errHandle;
        });
    this.auth.userInfo();
    this.loginToggle();
  }
  loginToggle(){
    this.onLoginToggle.emit();
  }
}
