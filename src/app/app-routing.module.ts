import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivecontainerComponent } from './components/archivecontainer/archivecontainer.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { TrashcontainerComponent } from './components/trashcontainer/trashcontainer.component';
import { NotescontainerComponent } from './components/notescontainer/notescontainer.component';

const routes: Routes = [
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"signin",
    component:SigninComponent
  },
  {
    path:"dashbord",
    component:DashbordComponent,
    children:[
      {path:"notes",component:NotescontainerComponent},
      {path:"archive",component:ArchivecontainerComponent},
      {path:"trash",component:TrashcontainerComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
