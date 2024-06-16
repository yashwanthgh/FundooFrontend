import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpService:HttpService) { }
  getNotesApi(){
    return this.httpService.NotesApi();
  }
 
  addNotesApi(data:any){
    return this.httpService.createNotesApi(data);
  }

  archiveNotes(data:any){
    return this.httpService.archiveNotesApi(`/Note/isarchived?NoteId=${data}`)
  }
  trashNotes(data:any){
    return this.httpService.archiveNotesApi(`/Note/istrashed?NoteId=${data}`)
  }
}
