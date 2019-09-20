import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Token } from '../../../models/UserInfo/Token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private registerGroup: FormGroup;
  registerError: string;
  constructor(private builder: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.createRegister();
  }
  @Output() onRegisterToggle = new EventEmitter<any>();
  createRegister() {
    this.registerGroup = this.builder.group({
      Email: new FormControl(),
      Username: new FormControl(),
      Password: new FormControl(),
      ConfirmPassword: new FormControl()
    })
  }
  onSubmit() {
    console.log(this.registerGroup.value);
    this.auth.register(this.registerGroup.value)
      .subscribe(
        () => {
          this.auth.login(this.registerGroup.value)
            .subscribe((token: Token) => {
              localStorage.setItem('id_token', token.access_token);
              this.auth.CreateProfile(token.access_token)
                .subscribe(() => {
                  this.router.navigate(['/profileCreate']);
                })
            });
        },
        error => {
          let errHandle: any = error.error.ModelState;
          let errValues: any = (Object.values(errHandle)[0]);
          this.registerError = errValues;
        });
    this.registerToggle();
  }
  registerToggle() {
    this.onRegisterToggle.emit();
  }
}
