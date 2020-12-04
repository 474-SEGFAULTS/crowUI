import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscussionComponent } from './discussion/discussion.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { GenreComponent } from './genre/genre.component';
import { AlbumComponent } from './album/album.component';

const routes: Routes = [
  {path:'',redirectTo:'welcome',pathMatch:'full'},
  {path: '', component:DiscussionComponent}
  {path:'welcome', component: WelcomeComponent},
  {path:'about', component: AboutComponent},
  {path:'login', component: LoginComponent},
  {path:'signUp', component: SignUpComponent},
  {path:'home', component: HomeComponent},
  {path:'genres', component: GenreComponent},
  {path:'album', component: AlbumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
