import { Component, EventEmitter, Input, OnInit, Output, ViewContainerRef } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/dataservice/data.service';
import { NoteService } from 'src/app/services/noteservice/note.service';
import { NOTE_ICON, REMINDER_ICON, EDIT_ICON, ARCHIVE_ICON, TRASH_ICON, COLLABRATOR_ICON, TICK_ICON, BRUSH_ICON, UNDO_ICON, REDO_ICON, IMG_ICON, MORE_ICON, COLOR_PALATTE_ICON, PIN_ICON } from 'src/assets/svg-icons';

@Component({
  selector: 'app-notecard',
  templateUrl: './notecard.component.html',
  styleUrls: ['./notecard.component.scss']
})
export class NotecardComponent {
  @Output() updateList = new EventEmitter();
  @Input() listOfNotes: any[] = [];
  @Input() notesData:any[]=[]
  @Input() container: string = "notes"
  archiveNotesList:[]=[];
  searchString:string=''
  subscription!:Subscription
  
  constructor( iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private vcr: ViewContainerRef, private notesService:NoteService,private  dataService:DataService) {

    iconRegistry.addSvgIconLiteral("note-icon", sanitizer.bypassSecurityTrustHtml(NOTE_ICON))
    iconRegistry.addSvgIconLiteral("reminder-icon", sanitizer.bypassSecurityTrustHtml(REMINDER_ICON))
    iconRegistry.addSvgIconLiteral("edit-icon", sanitizer.bypassSecurityTrustHtml(EDIT_ICON))
    iconRegistry.addSvgIconLiteral('archive-icon', sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON))
    iconRegistry.addSvgIconLiteral('trash-icon', sanitizer.bypassSecurityTrustHtml(TRASH_ICON))
    iconRegistry.addSvgIconLiteral('collaborator-icon', sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON));
    iconRegistry.addSvgIconLiteral('tick-icon', sanitizer.bypassSecurityTrustHtml(TICK_ICON));
    iconRegistry.addSvgIconLiteral('brush-icon', sanitizer.bypassSecurityTrustHtml(BRUSH_ICON));
    iconRegistry.addSvgIconLiteral('undo-icon', sanitizer.bypassSecurityTrustHtml(UNDO_ICON));
    iconRegistry.addSvgIconLiteral('redo-icon', sanitizer.bypassSecurityTrustHtml(REDO_ICON));
    iconRegistry.addSvgIconLiteral('img-icon', sanitizer.bypassSecurityTrustHtml(IMG_ICON));
    iconRegistry.addSvgIconLiteral('more-icon', sanitizer.bypassSecurityTrustHtml(MORE_ICON));
    iconRegistry.addSvgIconLiteral('backgroundcolor-icon', sanitizer.bypassSecurityTrustHtml(COLOR_PALATTE_ICON));
    iconRegistry.addSvgIconLiteral('pin-icon', sanitizer.bypassSecurityTrustHtml(PIN_ICON));
  }

  handleNoteIconsClickNote(value:any,action:string,colour?:string){
    if(action =='archive' || action =='unarchive'){

     this.notesService.archiveNotes(value.noteId).subscribe((res) => this.updateList.emit({data: value,action}));
    }
    else if(action =='trash' || action == 'restore'){

      this.notesService.trashNotes(value.noteId).subscribe((res) => this.updateList.emit({data: value,action}));
     }
    else{
      // this.notesService.colorApi(value.noteId).subscribe((res) => 
        this.updateList.emit({data:{...value, colour:colour},action});
    }

  }

}
