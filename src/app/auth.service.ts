import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http' 


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private REST_API_SERVER = "https://aravindtwitter.herokuapp.com/twittersearch?key=";

  constructor(private http:HttpClient) { }
  public getData(key:any)
  {
   return this.http.get(this.REST_API_SERVER+key);
  }
}
