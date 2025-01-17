import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public authSvc:AuthService) { }

  ngOnInit(): void {
  }
  get id():string{
    return this.authSvc.id;
  }
}
