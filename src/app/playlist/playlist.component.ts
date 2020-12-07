import { Input } from '@angular/core';
import { Component, OnInit, InputDecorator } from '@angular/core';

import { ApiService } from 'src/app/api.service';

import { $ } from 'protractor';
import { AuthService } from '../auth.service';

@Component({
	selector: 'app-playlist',
	templateUrl: './playlist.component.html',
	styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

	examplePlaylist = []

	constructor(private apiSvc:ApiService, public authSvc:AuthService ) { 
		this.loadPlaylist();
	}

	ngOnInit(): void {
		console.log("help");
	}

	loadPlaylist(): void {
		this.apiSvc.getUserPlaylist(this.authSvc.id).subscribe(response => {
			for(var id of response){
				this.apiSvc.getPlaylist(id).subscribe(response => {
					this.examplePlaylist.push(response);
				}, err => {
			console.log('ERROR!');
			console.log(err);
		})
			}
		}, err => {
			console.log('ERROR!');
			console.log(err);
		})
	}

	loadSongs():void {
		for(var song of this.examplePlaylist){
			this.apiSvc.getSong(song)
		}
	}

	playSong(id: string): void {
		console.log("Play song #" + id);
	}

}
