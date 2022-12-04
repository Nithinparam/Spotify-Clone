import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public route: ActivatedRoute, public serve: SpotifyService) {}
  NewTrackId: any;
  addTrack(newTrack: string) {
    this.NewTrackId = newTrack;
  }
  token: any;
  access_token: any;
  token_type: string;
  expires_in: string;
  public tot: string;
  ngOnInit(): void {
    this.token = this.route.snapshot?.fragment.split('&');
    this.access_token = this.token[0]?.split('=')[1];
    this.expires_in = this.token[2]?.split('=')[1];
    this.token_type = this.token[1]?.split('=')[1];
    this.tot = this.token_type.concat(' ', this.access_token);
    localStorage.setItem('token', this.tot);
    // this.serve.SetHttpOptions()
  }
}
