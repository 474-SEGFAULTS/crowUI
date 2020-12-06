import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() activeClass = 'active';

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
