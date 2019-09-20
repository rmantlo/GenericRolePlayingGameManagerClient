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
export class CharacterService {
  Url = 'https://localhost:44336/api';
  constructor(private http: HttpClient) { }
  //character skeleton functions
  getCharacterSkeletons() {
    return this.http.get(`${this.Url}/CharSkele`, header);
  }
  getCharacterSkeletonDetails(id: number){
    return this.http.get(`${this.Url}/character-skeleton/${id}`, header);
  }
  createCharacterSkeleton(body) {
    return this.http.post(`${this.Url}/character-skeleton/create`, body, header);
  }

  //character instance functions
  getCharacterInstances() {
    return this.http.get(`${this.Url}/instance-character`, header);
  }
  getCharacterInstanceDetails(id: number){
    return this.http.get(`${this.Url}/instance-character/details/${id}`, header);
  }
}
