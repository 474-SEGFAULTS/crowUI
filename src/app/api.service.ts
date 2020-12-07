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
    return this.http.get(this.path + 'song/' + songID)
  }

  getPlaylist(playlistID: number) : Observable<any> {
    return this.http.get(this.path + 'playlist/' + playlistID)
  }

  getAlbums() : Observable<any> {
    return this.http.get(this.path + 'album/')
  }

  getAlbum(albumID: number) : Observable<any> {
    return this.http.get(this.path + 'album/' + albumID)
  }

  getArtists() : Observable<any> {
    return this.http.get(this.path + 'artist/')
  }
  getArtist(artistID: number) : Observable<any> {
    return this.http.get(this.path + 'artist/' + artistID)
  }

  getGenre(genreID: number) : Observable<any> {
    return this.http.get(this.path + 'genre/' + genreID)
  }

  getUserPlaylist(userID: string): Observable<any> {
    return this.http.get(this.path + 'user/' + userID + '/playlists')
  }

  getUserName(userID: string): Observable<any> {
    return this.http.get(this.path + 'user/' + userID)
  }
}
