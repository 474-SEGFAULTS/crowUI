import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private path='http://localhost:3000/'
  private _token:string=null;
  private _id:string=null;
  CurrentUser: ReplaySubject<string>=new ReplaySubject<string>();

  get id():string{
    if (this._id==null){
      this._id=localStorage.getItem('id')
    }
    return this._id;
  }
  
  set id(val:string){
    this._id=val;
    if (val==null)
      localStorage.removeItem('id');
    else
      localStorage.setItem('id',val);
  }


  get token():string{
    if (this._token==null){
      this._token=localStorage.getItem('token')
    }
    return this._token;
  }
  
  set token(val:string){
    this._token=val;
    if (val==null)
      localStorage.removeItem('token');
    else
      localStorage.setItem('token',val);
  }
  get loggedIn():boolean{
    return this.token!=null;
  }
  constructor(private http:HttpClient) { 
    this.CurrentUser.next(null);
  }

  //authorize calls the underlying api to see if the current token is valid (if it exists) and clears it if it is not.
  //returns nothing, but updates token if it is invalid
  authorize():void{
    this.http.get(this.path+'authorize').subscribe(result=>{
      //on success, we do nothing because token is good
      console.log(result);
      if (result['status']!='success'){
        this.token=null;
        this.id=null;
        this.CurrentUser.next(null);
      }
      else{
        this.CurrentUser.next(result['data'].email)
      }

    },err=>{
      this.token=null;
      this.id=null;
    });
  }

  login(email: string,password:string): Observable<any>{
    return this.http.post<any>(this.path+'login',{email: email,password: password })
      .pipe(map(user=>{
        this.token=user.data.token
        this.id=user.data.id
        this.CurrentUser.next(user.data.user.email);
        return user.data.user;
      }),catchError(err=>{this.CurrentUser.next(null);this.token=null;return throwError(err||'server error')}));
  }

  register(email: string,password:string): Observable<any>{
    return this.http.post<any>(this.path+'register',{email: email,password: password });
  }

  logout(){
    this.token=null;
    this.CurrentUser.next(null);
  }
}
