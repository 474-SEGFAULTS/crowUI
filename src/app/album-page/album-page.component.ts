import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.css']
})
export class AlbumPageComponent implements OnInit {
  id: number;
  songs = [];
  name: string;
  artist: string;
  album_cover: string;
  constructor(private apiSvc:ApiService, 
    private route:ActivatedRoute, 
    private playSvc:PlayerService) { 
  }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.params['id']);
    this.loadSongs();
  }

  loadSongs(): void {
    let i = 0;
		this.apiSvc.getAlbum(this.id).subscribe(response => {
      this.name = response.name;
      this.artist = response.artist;
      this.album_cover = response.album_cover;
			for(var song of response.songs){
        this.apiSvc.getSong(song).subscribe(resp => {
          this.songs.push(resp);
        })
      }
      console.log(this.songs);
		}, err => {
			console.log('ERROR!');
			console.log(err);
    });
    
    
  }
  playSong(song: any): void {
    this.playSvc.play(song);
	}


}
