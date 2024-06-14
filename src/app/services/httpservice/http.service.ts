import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private httpClient: HttpClient) { }
  
  signinApi(data:any){
   return this.httpClient.post("http://localhost:5188/api/login", data);
  }

  signupApi(data:any){
    return this.httpClient.post("http://localhost:5188/api/register", data);
  }
}
