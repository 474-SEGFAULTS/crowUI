import { Input } from '@angular/core';
import { Component, OnInit, InputDecorator } from '@angular/core';

import { ApiService } from 'src/app/api.service';

import { $ } from 'protractor';

@Component({
	selector: 'app-playlist',
	templateUrl: './playlist.component.html',
	styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

	examplePlaylist = [{
		'id': 1,
		'title': 'song name',
		'artist': 'someone',
		'album': 'someone2',
		'created': 'yesterday'
	}]

	constructor(private apiSvc:ApiService) { }

	ngOnInit(): void {
		console.log("help");
	}

	loadPlaylist(id: number): void {
		this.apiSvc.getPlaylist(id).subscribe(response => {
			console.log(response);
		}, err => {
			console.log('ERROR!');
			console.log(err);
		})
	}

	playSong(id: string): void {
		console.log("Play song #" + id);
	}

}
