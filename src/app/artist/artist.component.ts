import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artists = [];

  
  constructor(private apiSvc:ApiService, public authSvc:AuthService ) { }

  ngOnInit(): void {
    this.loadPlaylist();
  }

  loadPlaylist(): void {
		this.apiSvc.getArtists().subscribe(response => {
      this.artists=response;
    }, err => {
			console.log('ERROR!');
			console.log(err);
		})
	}
}
