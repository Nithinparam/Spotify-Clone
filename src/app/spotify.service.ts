import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  public authKey?: any;
  // public httpOptions: any;
  public SongPlayId: any;
  httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')
    })
  };

  constructor(private http: HttpClient) {}
  // SetHttpOptions() {
  //   this.httpOptions = {
  //     headers: new HttpHeaders({
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //       Authorization: localStorage.getItem('token')
  //     })
  //   };
  // }
  getPlaylistsDet(id: string): Observable<any> {
    let urls = `https://api.spotify.com/v1/playlists/${id}`;
    return this.http.get<any>(urls, this.httpOptions);
  }
  getProfile(): Observable<any> {
    let urls = `https://api.spotify.com/v1/me`;
    return this.http.get<any>(urls, this.httpOptions);
  }

  getNewTracks(): Observable<any> {
    let urls = `https://api.spotify.com/v1/me/top/tracks?limit=20`;
    return this.http.get<any>(urls, this.httpOptions);
  }

  getSearchTracks(searchTrack): Observable<any> {
    let urls = `https://api.spotify.com/v1/search?q=${searchTrack}&type=track`;
    return this.http.get<any>(urls, this.httpOptions);
  }
  getArtist(searchArt): Observable<any> {
    let urls = `https://api.spotify.com/v1/search?q=${searchArt}&type=artist`;
    return this.http.get<any>(urls, this.httpOptions);
  }
  getArtalbum(id: any): Observable<any> {
    let urls = `https://api.spotify.com/v1/artists/${id}`;
    return this.http.get<any>(urls, this.httpOptions);
  }
  getArtDet(id: any): Observable<any> {
    let urls = `https://api.spotify.com/v1/artists/${id}/albums`;
    return this.http.get<any>(urls, this.httpOptions);
  }
  getTracks(id: any): Observable<any> {
    let urls = `https://api.spotify.com/v1/albums/${id}/tracks`;
    return this.http.get<any>(urls, this.httpOptions);
  }
  Playsong(id: any): Observable<any> {
    let urls = `https://api.spotify.com/v1/tracks/${id}`;
    return this.http.get<any>(urls, this.httpOptions);
  }
  getPlaylist(): Observable<any> {
    let urls = `https://api.spotify.com/v1/me/playlists`;
    return this.http.get<any>(urls, this.httpOptions);
  }
}
