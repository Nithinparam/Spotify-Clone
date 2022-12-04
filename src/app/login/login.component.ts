import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public route: ActivatedRoute) {}
  authEndpoint = 'https://accounts.spotify.com/authorize';
  clientId = '49f0c634c34548ceb7088dcdde41d30d';
  scopes = [
    'user-read-playback-position',
    'playlist-read-private',
    'user-library-read',
    'user-library-modify',
    'user-top-read',
    'playlist-read-collaborative',
    'user-read-private',
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state'
  ];
  redirect_uri = 'https://angular-ivy-2gxael.stackblitz.io/home';
  loginUrl = `${this.authEndpoint}?client_id=${this.clientId}&redirect_uri=${
    this.redirect_uri
  }&scope=${this.scopes.join('%20')}&response_type=token&show_dialog=true`;
  getToken: any = '';

  ngOnInit() {}
  ngDoCheck() {
    this.getToken;
  }
}
