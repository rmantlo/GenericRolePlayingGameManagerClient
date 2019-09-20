import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const header = {
  headers: new HttpHeaders({
    "Authorization": `Bearer ${localStorage.getItem("id_token")}`
  })
}

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  Url:string = "https://localhost:44336/api";
  constructor(private http:HttpClient) { }
  getMyRooms(): any{
    return this.http.get(`${this.Url}/room`, header);
  }
  getRoomDetails(id: number): any {
    return this.http.get(`${this.Url}/room/${id}`, header);
  }
}
