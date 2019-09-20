import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  ProfileUpdates: FormGroup;
  constructor(private builder: FormBuilder, private auth: AuthService, private router: Router) { }
  ngOnInit() {
    this.createProfile();
  }
  createProfile(): any {
    this.ProfileUpdates = this.builder.group({
      ProfileImage: new FormControl(),
      About: new FormControl()
    })
  }
  onSubmit() {
    this.auth.UpdateProfile(this.ProfileUpdates)
      .subscribe(() => {
        //this.router.navigate(['/dashboard']);
      })
  }

}
