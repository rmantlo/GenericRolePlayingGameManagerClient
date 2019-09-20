import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {
  UserInfo: any;
  Settings: boolean = false;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.GetMyProfile()
      .subscribe( info => {
        this.UserInfo = info;
      })
  }

}
