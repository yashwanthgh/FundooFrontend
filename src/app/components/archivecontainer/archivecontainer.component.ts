import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-archivecontainer',
  templateUrl: './archivecontainer.component.html',
  styleUrls: ['./archivecontainer.component.scss'],
})
export class ArchivecontainerComponent implements OnInit {
  archiveNotesList: any = [];
  filtered: any = [];
  note: any = [];

  constructor(private notesService: NoteService) {}

  ngOnInit(): void {
    this.notesService.getNotesApi().subscribe((res) => {
      this.filtered = res;
      console.log('all botes', this.filtered.data);
      this.archiveNotesList = this.filtered.data.filter((note: any) => {
        return note.isArchived === true && note.isDeleted === false;
      });
      console.log('filterd', this.archiveNotesList);
    });
  }
  handleUpdateNotesList($event: any) {
    console.log($event);
    if ($event.action == 'addNotes') {
      this.archiveNotesList.push($event);
    } else if ($event.action == 'archive' || $event.action == 'trash') {
      this.archiveNotesList = this.archiveNotesList.filter(
        (note: any) => note.noteId != $event.data.noteId
      );
    }
  }
}
