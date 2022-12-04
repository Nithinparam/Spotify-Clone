import { Component, Input, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor(public serve: SpotifyService) {}
  @Input() sngsrc = this.serve.SongPlayId;
  data: any;
  changeDetected = false;
  oldsngsrc: any;

  ngOnInit(): void {
    // this.playsong();
  }
  ngDoCheck(): void {
    if (this.sngsrc != this.oldsngsrc) {
      this.changeDetected = true;
      this.playsong();
      this.oldsngsrc = this.sngsrc;
    }
    // this.playsong()
  }
  playsong() {
    this.serve.Playsong(this.sngsrc).subscribe(ress => {
      this.data = ress;
    });
    console.log(this.data);
  }
}
