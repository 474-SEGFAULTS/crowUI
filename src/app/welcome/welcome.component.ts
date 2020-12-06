import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(public authSvc:AuthService) {
    authSvc.authorize();
  }

  ngOnInit(): void {
  }
  

  signout(){
    this.authSvc.logout();
    return false;
  }
  get loggedIn():boolean{
    return this.authSvc.loggedIn;
  }

}
