import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
 

@Injectable({
  providedIn: 'root'
})
export class LoadListService {

  constructor(private http:HttpClient) { }

  dogListingUrl = "assets/data/dogs.json";

  getDogs() {
    return this.http.get(this.dogListingUrl);
  }
}
