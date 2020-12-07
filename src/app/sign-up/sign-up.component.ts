import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  loginForm: FormGroup;
  loading =false;
  submitted=false;
  returnUrl: string;
  error: string;

  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private router: Router,private authSvc:AuthService) {
      if (authSvc.loggedIn)
      this.router.navigate(['/home']);
   }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
    this.returnUrl=this.route.snapshot.queryParams['returnUrl'] || '/login';
  }

  register(){
    this.submitted=true;
    if (this.loginForm.invalid){
      return;
    }
    this.loading=true;
    /*this.authSvc.register(this.loginForm.controls.username.value,this.loginForm.controls.password.value).subscribe(response=>{
      this.router.navigate([this.returnUrl]);console.log(response);
    },err=>{this.submitted=false;this.loading=false;this.error=err.message||err;});*/
    this.authSvc.register(this.loginForm.controls.username.value,this.loginForm.controls.password.value)
    .subscribe((resp) => {this.router.navigate([this.returnUrl]);}, (err) => {this.error=err.error.data});
  }

}
