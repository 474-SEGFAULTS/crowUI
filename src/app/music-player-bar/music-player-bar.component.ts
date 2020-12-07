import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef} from '@angular/core';
import $ from "jquery";
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-music-player-bar',
  templateUrl: './music-player-bar.component.html',
  styleUrls: ['./music-player-bar.component.css']
})
export class MusicPlayerBarComponent implements OnInit {
  @ViewChild('player') 
  playerRef: ElementRef;
  player: any;
  songName: string;
  artist: string;
  songLink : string;
  constructor(private playSvr: PlayerService) {
    
    
  }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(){
    console.log(this.playerRef.nativeElement);
    this.player = this.playerRef.nativeElement;
    this.playSvr.songLink.subscribe(res => {
      this.playTrack(res);
      console.log(res);
    })
    this.playSvr.songName.subscribe(res => {
      this.songName=res;
    })
    this.playSvr.artist.subscribe(res => {
      this.artist=res;
    })
  }
  playTrack(previewUrl) {
    this.player.src = previewUrl;
    //this.songLink=previewUrl;
    this.player.play();
  }
  get show():boolean{
    return this.playSvr.show;
  }
  playerEnded() {
    this.playSvr.trackEnded();
  }

}
