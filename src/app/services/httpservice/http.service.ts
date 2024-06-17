import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  private authHeader = new HttpHeaders({
    'Accept': "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}` || ""
  })

  signinApi(data: any) {
    return this.httpClient.post('http://localhost:5188/api/login', data);
  }

  signupApi(data: any) {
    return this.httpClient.post('http://localhost:5188/api/register', data);
  }

  NotesApi() {
    return this.httpClient.get('http://localhost:5188/api/notes', {headers: this.authHeader});
  }

  createNotesApi(data: any) {
    console.log(localStorage.getItem("token"));
    return this.httpClient.post('http://localhost:5188/api/createNote', data, {headers: this.authHeader});
  }

  archiveNotesApi(){
    return this.httpClient.put('http://localhost:5188/api/archiveNote', {}, {headers: this.authHeader});
  }
}
