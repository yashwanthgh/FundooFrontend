import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editnote',
  templateUrl: './editnote.component.html',
  styleUrls: ['./editnote.component.scss']
})
export class EditnoteComponent implements OnInit {

  title:string="";
  description:string="";
  colour:string="";

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<EditnoteComponent>) {
    console.log(data);
    this.title=data.title;
    this.description = data.description;
    this.colour = data.colour;
   }

  ngOnInit(): void {
    
  }

  handleUpdateNote(){
    this.dialogRef.close({...this.data,title:this.title,description:this.description,colour:this.colour});
  }

}
