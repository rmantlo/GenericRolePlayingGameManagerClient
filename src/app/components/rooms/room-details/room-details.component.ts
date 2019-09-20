import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {
  roomInfo:any;
  dicePopup: boolean = false;
  constructor(private room:RoomsService) { }
  
  ngOnInit() {
    //this.room.getRoomDetails(1).subscribe(e => this.roomInfo = e);
  }

}
