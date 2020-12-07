import { Component, OnInit, Input} from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { PlayerService } from '../player.service';
import { url } from 'inspector';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.css']
})
export class ArtistPageComponent implements OnInit {

  examplePlaylist = [{
		'id': 1,
		'title': 'song name',
		'artist': 'someone',
		'album': 'someone2',
		'created': 'yesterday'
  }]
  id: number;
  songs = [];
  name: string;
  pic: string;
  
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
		this.apiSvc.getArtist(this.id).subscribe(response => {
      this.name = response.name;
      this.pic = response.pic;
			for(var song of response.songs){
        this.apiSvc.getSong(song).subscribe(resp => {
          this.songs.push(resp);
          this.apiSvc.getAlbum(this.songs[i]['album']).subscribe(response => {
            console.log(response.name);
            this.songs[i]['album'] = [this.songs[i]['album'],response.name];
            i++;
          }, err => {
            console.log('ERROR!');
            console.log(err);
          })
        })
      }
      console.log(this.songs);
		}, err => {
			console.log('ERROR!');
			console.log(err);
    });
    
    
  }
  
  getAlbumName(id: number):any {
    this.apiSvc.getAlbum(id).subscribe(response => {
      console.log(response.name);
      return response.name;
    }, err => {
			console.log('ERROR!');
			console.log(err);
		})
  }
  playSong(song: any): void {
    this.playSvc.play(song);
	}
}
