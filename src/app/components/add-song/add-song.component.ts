import { Component, OnInit } from '@angular/core';
import { SongService } from '../../shared/song.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})

export class AddSongComponent implements OnInit {
  title = 'Add Song - Angular Universal CRUD App';
  songForm: FormGroup;

  constructor(
    private songService: SongService,
    public fb: FormBuilder,
    private titleService: Title,
    private metaTagService: Meta
  ) {
    this.form()
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      { name: 'description', content: 'Add song template' }
    );
  }

  form() {
    this.songForm = this.fb.group({
      name: [''],
      artist: ['']
    })
  }

  submit() {
    if (!this.songForm.valid) {
      return false;
    } else {
      this.songService.addSong(this.songForm.value)
        .subscribe((res) => {
          console.log(res)
          this.songForm.reset();
        })
    }
  }

}
