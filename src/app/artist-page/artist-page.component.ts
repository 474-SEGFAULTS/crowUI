import { Component, OnInit, Input} from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


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
  
  constructor(private apiSvc:ApiService, private route:ActivatedRoute) { 
  /* const id: Observable<string> = route.params.pipe(map(p=>p.id))
    console.log(id); */
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
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
