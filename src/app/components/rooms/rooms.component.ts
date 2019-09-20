import { Component, OnInit, Input } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  roomList: any = [];
  @Input() AreMyRooms: boolean;
  message:string;
  constructor(private room: RoomsService) { }

  ngOnInit() {
    if(this.AreMyRooms){
      //this.room.getMyRooms().subscribe(e => this.roomList = e);
      this.message = 'GM Rooms';
    }
    else if(!this.AreMyRooms){
      this.message = 'Player Rooms';
    }
  }
}
