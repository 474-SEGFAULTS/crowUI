import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumPageComponent } from './album-page/album-page.component';
import { ArtistPageComponent } from './artist-page/artist-page.component';
import { ArtistComponent } from './artist/artist.component';
import { PlaylistComponent } from './playlist/playlist.component';
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
  {path:'discussion', component:DiscussionComponent},
  {path:'welcome', component: WelcomeComponent},
  {path:'about', component: AboutComponent},
  {path:'login', component: LoginComponent},
  {path:'signUp', component: SignUpComponent},
  {path:'home', component: HomeComponent},
  {path:'genres', component: GenreComponent},
  {path:'albums', component: AlbumComponent},
  {path:'playlists', component: PlaylistComponent},
  {path:'artists', component: ArtistComponent},
  {path:'albums/:id', component: AlbumPageComponent},
  {path:'artists/:id', component: ArtistPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }