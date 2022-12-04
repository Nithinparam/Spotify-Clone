import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  constructor(
    public serve: SpotifyService,
    public route: ActivatedRoute,
    public router: Router
  ) {}
  oldId: any;
  changeDetect = false;
  playlist: any;
  id: any;
  TrackId: any;
  public newId: any;
  ngOnInit() {
    this.route.params.subscribe(params => (this.id = params.id));
  }
  ngDoCheck() {
    this.route.params.subscribe(params => (this.id = params.id));
    if (this.oldId != this.id) {
      this.getPlaylistDet();
      this.oldId = this.id;
    }
  }

  addNewTrackId(value: string) {
    this.serve.SongPlayId = value;
  }
  getPlaylistDet() {
    this.serve.getPlaylistsDet(this.id).subscribe(data => {
      this.playlist = data;
    });
  }
}
