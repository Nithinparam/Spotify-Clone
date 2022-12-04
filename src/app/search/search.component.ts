import { Component, OnInit, OnChanges } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(
    public event: EventEmitterService,
    public serve: SpotifyService
  ) {}
  Tracks: any;
  public artistsDet: any;
  dat: any;

  ngOnInit() {
    this.event.subsVar = this.event.invokeSearchCompoFunc.subscribe(
      (SearchData: string) => {
        this.OnSubmit(SearchData);
      }
    );
  }

  OnSubmit(SearchData) {
    this.serve.getArtist(SearchData).subscribe(data => {
      this.artistsDet = data.artists.items;
    });
    this.serve.getSearchTracks(SearchData).subscribe(trackdata => {
      this.Tracks = trackdata.tracks.items;
    });
  }
  playsong(urlsrc: any) {
    this.serve.SongPlayId = urlsrc;
  }
}
