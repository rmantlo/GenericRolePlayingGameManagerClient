import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-create',
  templateUrl: './profile-create.component.html',
  styleUrls: ['./profile-create.component.css']
})
export class ProfileCreateComponent implements OnInit {
  ProfileInfo: FormGroup;
  constructor(private builder: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.createProfile();
  }
  createProfile(): any {
    this.ProfileInfo = this.builder.group({
      ProfileImage: new FormControl(),
      About: new FormControl()
    })
  }
  onSubmit() {
    this.auth.UpdateProfile(this.ProfileInfo)
      .subscribe( () => {
        this.router.navigate(['/dashboard']);
      })
  }
}
