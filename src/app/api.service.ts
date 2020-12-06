import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private path='http://localhost:3000/'

  constructor(private http : HttpClient) {   }
  // ============================== crow stuff ==============================

  getSong(songID: number) : Observable<any> {
    return this.http.get(this.path + 'api/song/' + songID)
  }

  getPlaylist(playlistID: number) : Observable<any> {
    return this.http.get(this.path + 'api/playlist/' + playlistID)
  }

  getAlbum(albumID: number) : Observable<any> {
    return this.http.get(this.path + 'api/album/' + albumID)
  }

  getArtist(artistID: number) : Observable<any> {
    return this.http.get(this.path + 'api/artist/' + artistID)
  }

  getGenre(genreID: number) : Observable<any> {
    return this.http.get(this.path + 'api/genre/' + genreID)
  }

}
