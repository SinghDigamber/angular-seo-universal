import { Component, OnInit } from '@angular/core';
import { SongService } from '../../shared/song.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.component.html',
  styleUrls: ['./edit-song.component.css']
})

export class EditSongComponent implements OnInit {
  title = 'Edit Song - Angular SSR';
  updateSongForm: FormGroup;

  constructor(
    private songService: SongService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder,
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit() {
    this.songForm();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.updateSongForm = this.fb.group({
      name: [''],
      artist: ['']
    })
    this.showEmp(id)
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      { name: 'description', content: "Edit song data." }
    );
  }

  showEmp(id) {
    this.songService.getSong(id).subscribe((res) => {
      this.updateSongForm.setValue({
        name: res['name'],
        artist: res['artist']
      })
    })
  }

  songForm() {
    this.updateSongForm = this.fb.group({
      name: [''],
      artist: ['']
    })
  }

  updateSong() {
    if (!this.updateSongForm.valid) {
      return false;
    } else {
      let id = this.actRoute.snapshot.paramMap.get('id');
      this.songService.updateSong(id, this.updateSongForm.value)
        .subscribe(() => {
          this.router.navigateByUrl('/songs');
          console.log('Content updated successfully!')
        })
    }
  }
}