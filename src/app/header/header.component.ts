import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    public serve: SpotifyService,
    public loc: Location,
    public event: EventEmitterService
  ) {}
  profile: any;
  enable: boolean;
  SearchData: any;

  ngOnInit() {
    // console.log(this.loc.isCurrentPathEqualTo('/search'));
    this.getProfileData();
  }
  ngDoCheck() {
    if (this.loc.isCurrentPathEqualTo('/home/search')) {
      this.enable = true;
      return;
    }
    this.enable = false;
    this.SearchData = '';
  }
  getProfileData() {
    this.serve.getProfile().subscribe(data => {
      this.profile = data;
    });
  }
  OnSubmit() {
    if (this.SearchData === '') {
      return;
    }
    this.event.onEnter(this.SearchData);
  }
}
