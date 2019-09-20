import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers = {
  headers: new HttpHeaders({
    'Accept':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class DndApiService {
  Url: string = 'http://www.dnd5eapi.co/api/';
  constructor(private http: HttpClient) { }

  GetApi(num: number): any{
    let result = this.http.get(`${this.Url}classes/1`, headers).subscribe(e => console.log(e))


    console.log(result);
    return result;
  }
}
