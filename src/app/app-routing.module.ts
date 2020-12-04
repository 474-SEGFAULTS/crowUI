import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistComponent } from './artist/artist.component';
import { PlaylistComponent } from './playlist/playlist.component';

const routes: Routes = [ 
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'playlist', component: PlaylistComponent},
  {path:'artist', component: ArtistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
