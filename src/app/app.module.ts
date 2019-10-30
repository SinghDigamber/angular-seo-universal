import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AddSongComponent } from '../app/components/add-song/add-song.component';
import { EditSongComponent } from '../app/components/edit-song/edit-song.component';
import { SongsComponent } from '../app/components/songs/songs.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { SongService } from './shared/song.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    AddSongComponent,
    EditSongComponent,
    SongsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'serverApp'
    }),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SongService],
  bootstrap: [AppComponent]
})

export class AppModule { }
