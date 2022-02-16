import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { tweet } from './tweet';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private REST_API_SERVER = "https://aravindtwitter.herokuapp.com/twittersearch?key=";

  constructor(private http:HttpClient) { }
  public getData(key:any)
  {
    //let url="https://aravindtwitter.herokuapp.com/twittersearch?key=adobe";
   // return this.http.get(url);

   return this.http.get(this.REST_API_SERVER+key);
  }

 
}
