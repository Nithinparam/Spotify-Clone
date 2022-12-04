import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(public serve: SpotifyService) {}
  playlists: any;
  ngOnInit() {
    this.getPlaylist();
  }

  getPlaylist() {
    this.serve.getPlaylist().subscribe(data => {
      this.playlists = data.items;
    });
  }
}
