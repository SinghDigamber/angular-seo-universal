import { Component, OnInit } from '@angular/core';
import { SongService } from '../../shared/song.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})

export class SongsComponent implements OnInit {
  title = 'Songs List - Angular Music CRUD App';
  Songs: any = [];

  constructor(
    private songService: SongService,
    private titleService: Title,
    private metaTagService: Meta
  ) {
    this.songService.getSongs().subscribe((item) => {
      this.Songs = item;
    });
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      { name: 'description', content: "View top songs list in Angular app." }
    );
  }

  removeSong(employee, i) {
    if (window.confirm('Are you sure?')) {
      this.songService.deleteSong(employee._id)
        .subscribe((res) => {
          this.Songs.splice(i, 1);
        }
        )
    }
  }

}
