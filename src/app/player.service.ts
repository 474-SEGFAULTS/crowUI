import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  songLink:BehaviorSubject<string> = new BehaviorSubject<string>("nothing");
  songName:BehaviorSubject<string> = new BehaviorSubject<string>("nothing");
  artist:BehaviorSubject<string> = new BehaviorSubject<string>("nothing");
  private _song:string;
  get song():string{
    if (this._song==null){
      this._song=localStorage.getItem('songLink')
    }
    return this._song;
  }
  
  set song(val:string){
    this._song=val;
    if (val==null)
      localStorage.removeItem('songLink');
    else
      localStorage.setItem('songLink',val);
  }

  get show():boolean{
    return this.songLink.value!="nothing";
  }
  play(song: any){
    this.songLink.next("http://127.0.0.1:3000/"+song.stream_url);
    this.songName.next(song.name);
    this.artist.next(song.artist)
  }
  trackEnded() {
    this.songLink.next("");
  }
  constructor() { }
}
