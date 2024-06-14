import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpService:HttpService) { }
  getNotesApi(){
    return this.httpService.NotesApi("/notes");
  }
 
}
