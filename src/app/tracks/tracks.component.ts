import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {
  @Input() id: any;

  constructor(public route: ActivatedRoute, public serve: SpotifyService) {}

  ngOnInit(): void {
    this.getTracks();
  }
  data: any;
  sngsrcs: any;
  getTracks() {
    this.serve.getTracks(this.id).subscribe(res => {
      this.data = res.items;
    });
  }
  playsong(urlsrc: any) {
    this.serve.SongPlayId = urlsrc;
  }
}
