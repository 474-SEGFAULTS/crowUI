import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-playlist-page',
  templateUrl: './playlist-page.component.html',
  styleUrls: ['./playlist-page.component.css']
})
export class PlaylistPageComponent implements OnInit {
  
  id: number;
  songs = [];
  name: string;
  create_by: string;
  constructor(private apiSvc:ApiService, 
    private route:ActivatedRoute, 
    private playSvc:PlayerService) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.params['id']);
    this.loadSongs();
  }
  loadSongs(): void {
    
    let i = 0;
		this.apiSvc.getPlaylist(this.id).subscribe(response => {
      this.name = response.name;
      this.apiSvc.getUserName(response.created_by_user).subscribe(name => {
        this.create_by=name.name;
      })
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
