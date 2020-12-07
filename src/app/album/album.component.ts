import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  /* albumsCollection = [{
    'id': 1,
    'coverimg': 'album image',
		'album': 'album name',
	}] */

  albums = [];

  
  constructor(private apiSvc:ApiService, public authSvc:AuthService ) { }

  ngOnInit(): void {
    this.loadPlaylist();
  }

  loadPlaylist(): void {
		this.apiSvc.getAlbums().subscribe(response => {
      this.albums=response;
    }, err => {
			console.log('ERROR!');
			console.log(err);
		})
	}

}
