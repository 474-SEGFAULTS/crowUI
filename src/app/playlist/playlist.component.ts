import { Input } from '@angular/core';
import { Component, OnInit, InputDecorator } from '@angular/core';
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

	constructor() { }

	ngOnInit(): void {
		console.log("help");
	}

	playSong(id: string): void {
		console.log("Play song #" + id);
	}

}
