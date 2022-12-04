import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventEmitterService } from '../event-emitter.service';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  constructor(
    public route: ActivatedRoute,
    public serve: SpotifyService,
    public event: EventEmitterService
  ) {}

  compo = 'Home';

  NewRelease: any;
  oldId: any;
  NewID: any;
  artists: any;
  Tracks: any;
  ngOnInit(): void {
    this.getTopTracks();
  }
  ngDoCheck() {
    if (this.oldId != this.serve.SongPlayId) {
      this.NewID = this.serve.SongPlayId;
      this.addNewTrackId(this.NewID);
      this.oldId = this.NewID;
      return;
    }
  }
  addNewTrackId(value: string) {
    this.newItemEvent.emit(value);
  }

  songsource: any;
  profile: any;
  getTopTracks() {
    this.serve.getNewTracks().subscribe(data => (this.NewRelease = data.items));
    console.log(this.NewRelease);
  }
  playsong(urlsrc: any) {
    this.serve.SongPlayId = urlsrc;
  }
}
