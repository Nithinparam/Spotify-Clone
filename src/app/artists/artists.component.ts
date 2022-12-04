import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  data: any;
  artDet: any;
  albumId: any;
  idset = false;
  ind: any;
  sss = this.route.snapshot.params['id'];

  constructor(
    public route: ActivatedRoute,
    private loc: Location,
    public serve: SpotifyService
  ) {}

  ngOnInit(): void {
    this.getArtistsdet();
  }

  getArtistsdet() {
    this.serve.getArtalbum(this.sss).subscribe(art => {
      this.artDet = art;
    });
    this.serve.getArtDet(this.sss).subscribe(datas => {
      this.data = datas.items;
    });
  }
  goBack() {
    this.loc.back();
  }
  callTracks(id: any, i: any) {
    if (this.ind == i) {
      this.idset = false;
      return;
    }
    this.albumId = id;
    this.idset = true;
    this.ind = i;
  }
}
