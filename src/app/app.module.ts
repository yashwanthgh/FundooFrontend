import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { HeaderComponent } from './components/header/header.component';
import { NotecardComponent } from './components/notecard/notecard.component';
import { NotescontainerComponent } from './components/notescontainer/notescontainer.component';
import { TrashcontainerComponent } from './components/trashcontainer/trashcontainer.component';
import { ArchivecontainerComponent } from './components/archivecontainer/archivecontainer.component';
import { CreatenoteComponent } from './components/createnote/createnote.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    SidenavComponent,
    DashbordComponent,
    HeaderComponent,
    NotecardComponent,
    NotescontainerComponent,
    TrashcontainerComponent,
    ArchivecontainerComponent,
    CreatenoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatMenuModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
