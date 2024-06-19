import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-trashcontainer',
  templateUrl: './trashcontainer.component.html',
  styleUrls: ['./trashcontainer.component.scss']
})
export class TrashcontainerComponent implements OnInit {

  trashNotesList:any=[]

  constructor(private notesServive:NoteService) { }

  ngOnInit(): void {
    this.notesServive.getNotesApi().subscribe(resp=>{
      this.trashNotesList=resp;
      console.log('all notes',this.trashNotesList.data);
      this.trashNotesList=this.trashNotesList.data.filter((note:any)=>{
        return note.isDeleted===true;
      })
      console.log('trashed',this.trashNotesList);
      })
      
    }
    handleUpdateNotesList($event: any) {
      console.log($event);
      if ($event.action == 'addNotes') {
        this.trashNotesList.push($event);
      } else if ($event.action == 'archive' || $event.action == 'trash') {
        this.trashNotesList = this.trashNotesList.filter(
          (note: any) => note.noteId != $event.data.noteId
        );
      }
    }

}
